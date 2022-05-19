import React from 'react'
import Header from './Header'
import TodoItem from './TodoItem'
import Footer from './Footer'

const ToDoList = (props) => {
  return (
    <div className="todo-list">
        <Header title={props.title} addNewItem={props.addNewItem} />
        <ul className="list-group list-group-flush">
            {props.items.map( ( item, index ) => {
                return (
                    <TodoItem key={index} todoItem={item}/>
                )
            }
            )}
        </ul>
        <Footer itemLength = {props.items.length} />
    </div>
  )
}

export default ToDoList