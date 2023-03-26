import React from "react";
import "./ToDoItem.css";
import classNames from "classnames";

const ToDoItem = ({todos, changeTodo}) => {
  return (<div className="ToDoItem" onClick={() => changeTodo(todos.id)}>
    <span className={classNames({"line-through": todos.isCompleted})}>{todos.title}</span>
  </div>
  )};

export default ToDoItem;
