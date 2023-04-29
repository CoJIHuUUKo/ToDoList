import React from "react";
import "./CreateToDo.css";
import { useState } from "react";
import { BsJournalPlus } from "react-icons/bs";

const CreateToDo = ({ addToDo }) => {
  const [title, setTitle] = useState("");

  return (
    <div className="CreateToDo">
      <input
        type="text"
        maxLength={59}
        className="CreateToDo-input"
        placeholder="Add a task"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        onKeyUp={(e) => {
          if(e.key === "Enter") {
            addToDo(title)
          }
        } }
      />
      <BsJournalPlus
        className="CreateToDo-addToDo"
        onClick={() => addToDo(title)}
      />
    </div>
  );
};

export default CreateToDo;
