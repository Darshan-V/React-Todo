import React, { useState } from "react";
import "./Todo.css";
//rename
const Todo = ({
  todos,
  completeTodo,
  removeTodo,
  updatePriority,
  updateDueDate,
  addAndUpdateNotes,
  showAndHideMore,
}) => {
  return todos.map((todo, index) => (
    <div
      className={"task"}
      id={todo.id}
      key={todo.id}
      style={{ borderLeft: todo.borderColor }}
    >
      <div className="primary-content">
        <span>
          <div className="task-title">
            <input
              type="checkbox"
              id={todo.id}
              onClick={() => completeTodo(todo.id)}
              checked={todo.status}
            ></input>
          </div>
        </span>
        {todo.title}
        <div
          className="accordian"
          style={{ width: "100%" }}
          onClick={(e) => showAndHideMore(e, index)}
        ></div>
      </div>
      <div
        className="secondary-content"
        style={{ display: todo.showHide ? "flex" : "none" }}
      >
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
