import React from "react";
import "./CreateToDo.css";
import { useState } from "react";

const CreateToDo = ({addToDo}) => {
  const [title, setTitle] = useState("");

  return (
    <div>
      <input
        type="text"
        className="CreateToDo"
        placeholder="Add a task"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />
      <button onClick={() => addToDo(title)}>Add a task</button>
    </div>
  );
};

export default CreateToDo;
