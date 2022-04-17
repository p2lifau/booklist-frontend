import React from 'react'

const NewBookComponent = (props) => {
  return (
    <div>
        <h5>Add New Book</h5>
        <form onSubmit={props.createNewBook}>
            <input onChange={props.handleNewBookInputChange} type="text" name='title' placeholder='Title'/>
            
            <input onChange={props.handleNewBookInputChange} type="text" name='author' placeholder='Author'/>
            
            <input onChange={props.handleNewBookInputChange} type="number" name='year' placeholder='Year'/>
            
            <input onChange={props.handleNewBookInputChange} type="text" name='description' placeholder='Description'/>
            <button className='sub-btn' type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default NewBookComponent