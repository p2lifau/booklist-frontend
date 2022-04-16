import React from 'react'

const NewBookComponent = (props) => {
  return (
    <div>
        <h5>Add New Book</h5>
        <form onSubmit={props.createNewBook}>
            Title: <input onChange={props.handleNewBookInputChange} type="text" name='title'/>
            <br />
            Author: <input onChange={props.handleNewBookInputChange} type="text" name='author'/>
            <br />
            Year: <input onChange={props.handleNewBookInputChange} type="number" name='year'/>
            <br />
            Description: <input onChange={props.handleNewBookInputChange} type="text" name='description'/>
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default NewBookComponent