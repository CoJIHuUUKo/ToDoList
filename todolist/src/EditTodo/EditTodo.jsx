import React from "react";
import "./EditTodo.css";

const EditTodo = ({ saveEdit, value, setValue }) => {
  return (
    <div>
      <input
        type="text"
        maxLength={55}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={saveEdit}>Save</button>
    </div>
  );
};
export default EditTodo;
