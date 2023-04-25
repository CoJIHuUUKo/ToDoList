import React from "react";
import ToDoItem from "../ToDoItem/ToDoItem";
import CreateToDo from "../CreateToDo/CreateToDo";
import "./Todo.css";
import { useState, useEffect } from "react";

const Todo = () => {
  const saveTodo = "todos";
  const [todos, setTodos] = useState(() => {
    return JSON.parse(localStorage.getItem(saveTodo)) || [];
  });
  const [edit, setEdit] = useState(null);

  const [value, setValue] = useState("");

  useEffect(() => {
    if (todos.length > 0) {
      localStorage.setItem(saveTodo, JSON.stringify(todos));
    }
  }, [todos]);

  const changeTodo = (id) => {
    const copy = [...todos];
    const value = copy.find((todo) => todo.id === id);
    value.isCompleted = !value.isCompleted;
    setTodos(copy);
  };

  const addToDo = (title) => {
    setTodos([
      ...todos,
      {
        id: Math.random(),
        title,
        isCompleted: false,
      },
    ]);
  };

  const removeToDo = (id) => {
    setTodos([...todos].filter((todo) => todo.id !== id));
    localStorage.removeItem(saveTodo);
  };

  const editTodo = (id, title) => {
    setEdit(id);
    setValue(title);
  };

  const saveEdit = (id) => {
    const copyTodos = [...todos].map((item) => {
      if (item.id === id) {
        item.title = value;
      }
      return item;
    });
    setTodos(copyTodos);
    setEdit(null);
  };
  return (
    <div className="Todo">
      <h1>ToDo List</h1>
      <CreateToDo addToDo={addToDo} />
      {todos.map((todo) => (
        <div key={todo.id}>
          <ToDoItem
            todos={todo}
            changeTodo={changeTodo}
            removeToDo={removeToDo}
            editTodo={editTodo}
            saveEdit={saveEdit}
            isEdit={todo.id === edit}
            value={value}
            setValue={setValue}
          />
        </div>
      ))}
    </div>
  );
};

export default Todo;
