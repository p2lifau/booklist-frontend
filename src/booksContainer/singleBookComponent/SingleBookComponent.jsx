

const SingleBookComponent = (props) => {
  return (
    <div>
        <h2>{props.book.title}</h2>
        <h3>{props.book.author}</h3>
        <h4>{props.book.year}</h4>
        <p>{props.book.description}</p>
    </div>
  )
}

export default SingleBookComponent