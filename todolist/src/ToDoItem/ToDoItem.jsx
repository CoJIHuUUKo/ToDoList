import "./ToDoItem.css";
import { BsTrash } from "react-icons/bs";
import { FaRegEdit } from "react-icons/fa";
import { BsClipboardCheck } from "react-icons/bs";
import { BsJournalCheck } from "react-icons/bs";
import cn from "classnames";

const ToDoItem = ({
  todos,
  changeTodo,
  removeToDo,
  editTodo,
  isEdit,
  value,
  setValue,
  saveEdit,
}) => {
  return (
    <div className="ToDoItem">
      <div
        className={cn(
          "ToDoItem-text",
          todos?.isCompleted && "ToDoItem-text__line-through"
        )}
      >
        {isEdit ? (
          <span className="ToDoItem-edit">
            <BsClipboardCheck
              className="ToDoItem-edit__complete"
              onClick={() => saveEdit(todos.id)}
            />
            <input
              className="ToDoItem-edit__input"
              type="text"
              maxLength={55}
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
          </span>
        ) : (
          todos.title
        )}
      </div>
      <div>
        <FaRegEdit
          className="ToDoItem-edit__todo"
          onClick={() => editTodo(todos.id, todos.title)}
        />
        <BsTrash
          className="ToDoItem-trash"
          onClick={() => removeToDo(todos.id)}
        />
        <BsJournalCheck
          className="ToDoItem-todo__complete"
          onClick={() => changeTodo(todos.id)}
        />
      </div>
    </div>
  );
};

export default ToDoItem;
