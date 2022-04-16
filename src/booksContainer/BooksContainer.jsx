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
            },
            updateBook: {
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
    // CREATE ROUTE
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
        // console.log(creationResponseParsed)
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
    // DELETE ROUTE
    deleteBook = async (idToDelete) => {
        const deleteResponse = await fetch (`http://localhost:8000/api/books/${idToDelete}`,{
            method: "DELETE"
        })
        if(deleteResponse.status == 204){
            this.setState({
                books: this.state.books.filter(c => c.id !== idToDelete)
            })
            const parsedDeleteResponse = await deleteResponse.json();
        console.log(parsedDeleteResponse)
        }
    }
    handleUpdateBookInputChange =(e) => {
        // console.log(this)
        // console.log(e.target.value)
        this.setState({
            updateBook:{
                ...this.state.updateBook,
                [e.target.name] : e.target.value,
            }
        })
    }
    updateBook = async (idToUpdate) => {
        const apiResponse = await fetch (`http://localhost:8000/api/books/${idToUpdate}`, {
            method: "PUT",
            body: JSON.stringify(this.state.updateBook),
            headers: {
                "Content-Type": "application/json"
            }
        })
        if(apiResponse.status == 200){
            const parsedResponse = await apiResponse.json()
            this.setState({
                books: this.state.books.map(c => c.id === idToUpdate ? parsedResponse: c)
            })
        }
        console.log(apiResponse.status)
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
                    return <SingleBookComponent handleUpdateBookInputChange = {this.handleUpdateBookInputChange} updateBook = {this.updateBook} deleteBook = {this.deleteBook} book = {book} key = {`book-${book.id}`} ></SingleBookComponent>
                })}
            </div>
        )
    }
}

export default BooksContainer