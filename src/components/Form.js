import React, { useState } from "react";
import "./Form.css";
import { v4 as uuidv4 } from "uuid";

function TodoForm(props) {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: uuidv4(),
      text: value,
    });
    setValue("");
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="todo-form">
        <input
          type="text"
          className="todo-input"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Add new todo"
        />
      </form>
    </div>
  );
}

export default TodoForm;
