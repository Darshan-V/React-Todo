import React, { useState } from "react";
import "./Form.css";

function TodoForm(props) {
  const [input, setInput] = useState("");
  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
      status: false,
    });
    setInput("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="todo-form">
        <>
          <input
            placeholder="Add a todo"
            value={input}
            onChange={handleChange}
            name="text"
            className="todo-input"
          />
        </>
      </form>
    </div>
  );
}

export default TodoForm;
