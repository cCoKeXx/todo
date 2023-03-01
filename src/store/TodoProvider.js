import React, { useState, useEffect } from "react";
import TodoContext from "./todo-context";

const initialTodos = localStorage.getItem(`todos`)
  ? JSON.parse(localStorage.getItem("todos"))
  : [];

const TodoProvider = (props) => {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState(initialTodos);
  const [index, setIndex] = useState(null);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  const addTodo = (todoString) => {
    if (index !== null) {
      let tempArr = todos.map((todo) => {
        return todos.indexOf(todo) === index ? { ...todo, input: input } : todo;
      });
      document.getElementById("submit").innerHTML = "Add";
      setTodos(tempArr);
    } else {
      setTodos((prevState) => [
        { input: todoString, checkbox: false },
        ...prevState,
      ]);
    }
    setIndex(null);
    setInput("");
  };

  const removeTodo = (index) => {
    setTodos((prevState) => {
      return prevState.filter((todo) => todos.indexOf(todo) !== index);
    });
  };

  const editTodo = (index) => {
    setIndex(index);
    document.getElementById("submit").innerHTML = "Edit";

    todos.map((todo) => {
      if (todos.indexOf(todo) === index) {
        setInput(todo.input);
      }
      return index;
    });
  };

  const toggleCheckbox = (index) => {
    let tempList = todos.map((todo) => {
      return todos.indexOf(todo) === index
        ? { ...todo, checkbox: !todo.checkbox }
        : todo;
    });
    setTodos(tempList);
  };
  const todoContext = {
    todos,
    addTodo,
    removeTodo,
    editTodo,
    input,
    setInput,
    toggleCheckbox,
  };

  return (
    <TodoContext.Provider value={todoContext}>
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
