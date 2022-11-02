import React, { useState } from "react";
import "./Todo.css";

const Todo = ({
  todos,
  completeTodo,
  removeTodo,
  updatePriority,
  updateDueDate,
  addAndUpdateNotes,
}) => {
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
      </div>
      <div className="secondary-content">
        <div className="description">
          <textarea
            className="todo-notes"
            placeholder="Description..."
            onChange={(e) => addAndUpdateNotes(e, index, todo.id)}
            value={todo.notes}
          ></textarea>
        </div>
        <div className="duedate-priority">
          <input
            type="date"
            className="due-date"
            onChange={(e) => updateDueDate(e, index, todo.id)}
            value={todo.dueDate}
          ></input>
          <select
            className="priority"
            value={todo.priority}
            onChange={(e) => updatePriority(e, index, todo.id)}
          >
            <option value="0">None</option>
            <option value="1">Low</option>
            <option value="2">Medium</option>
            <option value="3">High</option>
          </select>
          <button onClick={() => removeTodo(todo.id)} className="delete-icon">
            Remove
          </button>
        </div>
      </div>
    </div>
  ));
};

export default Todo;
