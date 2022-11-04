import React, { useState } from "react";
import TodoForm from "./Form";
import Todo from "./Todo";
import Footer from "./Footer";

function TodoList() {
  const [todos, setTodos] = useState([]);
  // console.log(todos);

  const addTodo = (todo) => {
    if (!todo.title || /^\s*$/.test(todo.title)) {
      return;
    }

    const newTodos = [todo, ...todos];

    setTodos(newTodos);
  };

  const removeTodo = (id) => {
    const removedArr = [...todos].filter((todo) => todo.id !== id);
    setTodos(removedArr);
  };

  const completeTodo = (id) => {
    //rename
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
    priorityBorder(event.target.value, index, id);
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

  const deleteAll = () => {
    setTodos([]);
  };

  const deleteDoneTasks = () => {
    const activeTodos = todos.filter((todo) => todo.status === false);
    setTodos(activeTodos);
  };

  const showAndHideMore = (event, index) => {
    todos[index].showHide = !todos[index].showHide;
    setTodos([...todos]);
  };

  // let showDone = false;
  // const showDoneTasks = (event) => {
  //   if (showDone) {
  //     setTodos(todos.concat(todos.filter((todo) => todo.status)));
  //   } else {
  //     setTodos(todos.filter((task) => !task.done));
  //   }
  //   showDone = !showDone;
  // };

  const priorityBorder = (value, index) => {
    const borderType = "solid 5px ";
    const borderColorMapping = {
      0: "white",
      1: "rgb(3, 252, 173)",
      2: "orange",
      3: "crimson",
    };
    todos[index].borderColor = borderType + borderColorMapping[value];
  };

  return (
    <>
      <Todo
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        showAndHideMore={showAndHideMore}
        addAndUpdateNotes={addAndUpdateNotes}
        updatePriority={updatePriority}
        updateDueDate={updateDueDate}
      />
      <TodoForm onSubmit={addTodo} />

      <Footer
        todos={todos}
        deleteDoneTasks={deleteDoneTasks}
        deleteAll={deleteAll}
        // showDoneTasks={showDoneTasks}
      />
    </>
  );
}

export default TodoList;
