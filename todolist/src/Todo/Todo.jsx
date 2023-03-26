import React from "react";
import ToDoItem from "../ToDoItem/ToDoItem";
import CreateToDo from "../CreateToDo/CreateToDo";
import "./Todo.css";
import { useState } from "react";

const Todo = () => {
  const todosBlock = [
    {
      id: 1,
      title: "First",
      isCompleted: false,
    },
    {
        id: 2,
        title: "Second",
        isCompleted: false,
      },
      {
        id: 3,
        title: "Three",
        isCompleted: false,
      },
  ];

  const [todos, setTodos] = useState(todosBlock)
  const changeTodo = (id) => {
    const copy = [...todos];
    const value = copy.find(todo => todo.id === id);
    value.isCompleted = !value.isCompleted;
    setTodos(copy);
  }

  const addToDo = (title) => {
    setTodos([...todos,
      {
        id: new Date(),
        title,
        isCompleted: false
      }])
  }

  return (
    <div className="Todo">
      <h1>ToDo List</h1>
      <CreateToDo addToDo={addToDo}/>
      {todos.map((todo) => (
       <div className="Todo__item"><ToDoItem key={todos.id} todos={todo} changeTodo={changeTodo} addToDo={addToDo}/></div>
      ))}
    </div>
  );
};

export default Todo;
