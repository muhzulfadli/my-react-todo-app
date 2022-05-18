import React from 'react'
import Header from './Header'
import TodoItem from './TodoItem'

const ToDoList = (props) => {
  return (
    <div className="todo-list">
        <Header title={props.title} />
        <ul className="list-group list-group-flush">
            {props.items.map( ( item ) => {
                return (
                    <TodoItem todoItem={item}/>
                )
            }
            )}
        </ul>
    </div>
  )
}

export default ToDoList