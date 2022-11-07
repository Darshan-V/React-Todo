import React from "react";
import TodoList from "./components/TodoList";
import Clock from "./components/clock";
import "./App.css";

function App() {
  return (
    <>
      <Clock />
      <div className="todo-app">
        <TodoList />
      </div>
    </>
  );
}

export default App;
