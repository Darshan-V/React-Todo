import React, { useState } from "react";
import "./Todo.css";

const Todo = ({ todos, completeTodo, removeTodo }) => {
  const [edit, setEdit] = useState({
    id: "",
    value: "",
    status: "",
  });

  return todos.map((todo, index) => (
    <div className={"task"} id={todo.id} key={index}>
      <span>
        <div>
          <input
            type="checkbox"
            id={todo.id}
            value={todo.status}
            onClick={() => completeTodo(todo.id)}
          ></input>
        </div>
      </span>
      <div
        onClick={() => setEdit({ id: todo.id, value: todo.text })}
        className={"task-title"}
        id={todo.id}
        key={index}
      >
        {todo.text}
      </div>
      <div className="button">
        <button onClick={() => removeTodo(todo.id)} className="delete-icon">
          Remove
        </button>
      </div>
    </div>
  ));
};

export default Todo;
