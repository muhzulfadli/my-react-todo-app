import React from 'react'

const Footer = (props) => {
  return (
    <div className="todo-footer">
      <span className="count-todos">
        {props.itemLength}
        {props.itemLength > 1 ? "items left" :"item left" }
      </span>
    </div>
  )
}

export default Footer