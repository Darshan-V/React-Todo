import React, { useEffect, useState } from "react";
import TodoForm from "./Form";
import Todo from "./Todo";
import Footer from "./Footer";
import {
  getAll,
  addTodo,
  updateTodo,
  deleteAll,
  deleteDone,
  deleteTodo,
} from "../fetchapi";

function TodoList() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    (async function () {
      const allTodos = await getAll();
      const parsedTodos = allTodos.map((todo) => ({
        ...todo,
        completed: JSON.parse(todo.completed),
        priorityBorder: todo.priority,
      }));
      setTodos(parsedTodos);
    })();
  }, []);

  const insertTodo = (todo) => {
    if (!todo.title || /^\s*$/.test(todo.title)) {
      return;
    }

    const newTodos = [todo, ...todos];
    addTodo(todo);
    setTodos(newTodos);
  };

  const removeTodo = (id) => {
    const removedArr = [...todos].filter((todo) => todo.id !== id);
    deleteTodo(id);
    setTodos(removedArr);
  };

  const completeTodo = (id, event) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      console.log(todo);
      updateTodo(todo.id, "completed", todo.completed);
      return todo;
    });

    setTodos(updatedTodos);
  };

  const editTitle = (event, index, id) => {
    todos[index].title = event.target.value;
    updateTodo(id, "title", event.target.value);
    setTodos([...todos]);
  };

  const updatePriority = (event, index, id) => {
    todos[index].priority = event.target.value;
    priorityBorder(event.target.value, index, id);
    updateTodo(id, "priority", event.target.value);
    setTodos([...todos]);
  };

  const updateDueDate = (event, index, id) => {
    todos[index].duedate = event.target.value;
    updateTodo(id, "duedate", event.target.value);
    setTodos([...todos]);
  };

  const addAndUpdateNotes = (event, index, id) => {
    todos[index].notes = event.target.value;
    updateTodo(id, "notes", event.target.value);
    setTodos([...todos]);
  };

  const removeAll = () => {
    deleteAll();
    setTodos([]);
  };

  const deleteDoneTasks = () => {
    const activeTodos = todos.filter((todo) => {
      if (todo.completed === false) return todo.id;
    });

    const inActiveTodos = todos.filter((todo) => {
      if (todo.completed === true) {
        return todo.id;
      }
    });
    const inActiveID = inActiveTodos.map((todo) => {
      return todo.id;
    });
    console.log(inActiveID);
    deleteDone(inActiveID);

    setTodos(activeTodos);
  };

  const showAndHideMore = (event, id) => {
    todos[id].showHide = !todos[id].showHide;
    setTodos([...todos]);
  };

  const showDoneTasks = () => {
    todos.map((todo) => {
      if (todo.completed === true) {
        const task = document.getElementById(`${todo.id}`);
        task.style.display = "none";
      }
      if (todo.completed === false) {
        const task = document.getElementById(`${todo.id}`);

        task.style.display = "flex";
      }
    });
  };

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
        editTitle={editTitle}
        addAndUpdateNotes={addAndUpdateNotes}
        updatePriority={updatePriority}
        updateDueDate={updateDueDate}
      />
      <TodoForm onSubmit={insertTodo} />

      <Footer
        todos={todos}
        deleteDoneTasks={deleteDoneTasks}
        removeAll={removeAll}
        showDoneTasks={showDoneTasks}
      />
    </>
  );
}

export default TodoList;
