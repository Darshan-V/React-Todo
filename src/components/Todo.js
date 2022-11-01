import React, { useState } from "react";
import "./Todo.css";

const Todo = ({ todos, completeTodo, removeTodo }) => {
  const [edit, setEdit] = useState({
    value: "",
    id: "",
  });

  return todos.map((todo, index) => (
    <div className={"task"} id={todo.id} key={index}>
      <div className="primary-content">
        <span>
          <div>
            <input
              type="checkbox"
              id={todo.id}
              status={todo.status}
              onClick={() => completeTodo(todo.id)}
            ></input>
          </div>
        </span>

        {todo.text}
        <div className="button">
          <button onClick={() => removeTodo(todo.id)} className="delete-icon">
            Remove
          </button>
        </div>
      </div>
      <div className="secondary-content">
        <div className="description">
          <textarea className="todo-notes" placeholder="Description"></textarea>
        </div>
        <div className="duedate-priority">
          <input type="date" className="due-date"></input>
          <select
            className="priority"
            name={todo.priority}
            value={todo.priority}
          >
            <option value="None">None</option>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </div>
      </div>
    </div>
  ));
};

export default Todo;
