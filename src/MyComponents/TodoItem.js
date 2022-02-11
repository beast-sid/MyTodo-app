import React from 'react'

const TodoItem = (props) => {
  return (
    <>
      <div className='todo_style'>
        <i className="fa fa-times" aria-hidden="true" onClick={() => {
          props.onSelect(props.id);/*we are passing id to be deleted to deleteitem function in app.js*/
        }} />

        <li>{props.text}</li>
      </div>
    </>
  )
}
export default TodoItem;