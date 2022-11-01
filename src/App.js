import React from "react";
import TodoList from "./components/TodoList";
import Clock from "./components/clock";
import "./App.css";

function App() {
  return (
    <div className="todo-app">
      <TodoList />
      <Clock />
    </div>
  );
}

export default App;
