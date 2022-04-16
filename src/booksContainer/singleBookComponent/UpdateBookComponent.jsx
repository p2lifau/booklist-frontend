import React from 'react'

const UpdateBookComponent = (props) => {
  return (
    <div>
        <h4>Update {props.book.name}</h4>

        <form onSubmit={(e) => { e.preventDefault(); props.updateBook(props.book.id)}}>
            Title: <input onChange={props.handleUpdateBookInputChange} type="text" name='title'/>
            <br />
            Author: <input onChange={props.handleUpdateBookInputChange} type="text" name='author'/>
            <br />
            Year: <input onChange={props.handleUpdateBookInputChange} type="number" name='year'/>
            <br />
            Description: <input onChange={props.handleUpdateBookInputChange} type="text" name='description'/>
            <button type='submit'>Edit</button>
        </form>
    </div>
  )
}

export default UpdateBookComponent