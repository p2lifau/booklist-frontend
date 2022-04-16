import UpdateBookComponent from "./UpdateBookComponent"

const SingleBookComponent = (props) => {
  return (
    <div>
        <h2>{props.book.title}</h2>
        <h3>{props.book.author}</h3>
        <h4>{props.book.year}</h4>
        <p>{props.book.description}</p>
        <button onClick={()=> {props.deleteBook(props.book.id)}}>Delete {props.book.name}</button>
        <UpdateBookComponent book = {props.book} handleUpdateBookInputChange = {props.handleUpdateBookInputChange} updateBook = {props.updateBook}></UpdateBookComponent>
    </div>
  )
}

export default SingleBookComponent