import React from 'react'
import SingleBookComponent from './singleBookComponent/SingleBookComponent'
import NewBookComponent from './newBookComponent/NewBookComponent'
class BooksContainer extends React.Component {
    constructor(){
        super()
        this.state = {
            books: [],
            newBook: {
                title: "",
                author: "",
                year: null,
                description: ""
            }
        }
    }
    handleNewBookInputChange =(e) => {
        console.log(this)
        console.log(e.target.value)
        this.setState({
            newBook:{
                ...this.state.newBook,
                [e.target.name] : e.target.value,
            }
        })
    }
   createNewBook =   async (e) => {
        e.preventDefault()
        const apiResponse = await fetch ("http://localhost:8000/api/books", {
            method: "POST",
            body: JSON.stringify(this.state.newBook),
            headers: {
                'Content-Type' : 'application/json'
            }
        })
        const creationResponseParsed = await apiResponse.json()
        console.log(creationResponseParsed)
        this.setState({
            books: [...this.state.books, creationResponseParsed]
        })
    }
    // function fetches our items from the server
    async getBooks() {
        const getBooksApiResponse = await fetch('http://localhost:8000/api/books')
        const parsedBooks = await getBooksApiResponse.json();
        this.setState({
            books: parsedBooks
        })
    }
    componentDidMount(){
        this.getBooks()
        console.log('doing our api call')
    }
    render(){
        return (
            <div>
                <h2>Books Container</h2>
                <NewBookComponent 
                createNewBook = {this.createNewBook}
                handleNewBookInputChange = {this.handleNewBookInputChange}></NewBookComponent>
                {this.state.books.map((book)=> {
                    return <SingleBookComponent book = {book} key = {`book-${book.id}`} ></SingleBookComponent>
                })}
            </div>
        )
    }
}

export default BooksContainer