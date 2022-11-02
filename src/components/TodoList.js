import React, { useState } from "react";
import TodoForm from "./Form";
import Todo from "./Todo";
import Clock from "./clock";

function TodoList() {
  const [todos, setTodos] = useState([]);
  console.log(todos);

  const addTodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    const newTodos = [todo, ...todos];

    setTodos(newTodos);
  };

  const removeTodo = (id) => {
    console.log(id);
    const removedArr = [...todos].filter((todo) => todo.id !== id);
    setTodos(removedArr);
  };

  const completeTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.status = !todo.status;
      }
      console.log(todo);
      return todo;
    });
    setTodos(updatedTodos);
  };

  const updatePriority = (event, index, id) => {
    todos[index].priority = event.target.value;
    setTodos([...todos]);
  };

  const updateDueDate = (event, index, id) => {
    todos[index].duedate = event.target.value;
    setTodos([...todos]);
  };

  const addAndUpdateNotes = (event, index, id) => {
    todos[index].notes = event.target.value;
    setTodos([...todos]);
  };

  return (
    <>
      <TodoForm onSubmit={addTodo} />
      <Todo
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        addAndUpdateNotes={addAndUpdateNotes}
        updatePriority={updatePriority}
        updateDueDate={updateDueDate}
      />
    </>
  );
}

export default TodoList;
