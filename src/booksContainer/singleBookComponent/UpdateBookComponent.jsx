import React from 'react'

const UpdateBookComponent = (props) => {
  return (
    <div>
        <h4>Update {props.book.name}</h4>

        <form onSubmit={(e) => { e.preventDefault(); props.updateBook(props.book.id)}}>
            <input onChange={props.handleUpdateBookInputChange} type="text" name='title' placeholder= 'Title'/>
            
            <input onChange={props.handleUpdateBookInputChange} type="text" name='author' placeholder='Author'/>
            
            <input onChange={props.handleUpdateBookInputChange} type="number" name='year' placeholder='Year'/>
            
            <input onChange={props.handleUpdateBookInputChange} type="text" name='description' placeholder='Description'/>
            <button className= "edit-btn"type='submit'>Edit</button>
        </form>
    </div>
  )
}

export default UpdateBookComponent