import React, { useContext } from "react";
import classes from './Input.module.css';
import TodoContext from "../../store/todo-context";

const Input = () => {
  const { addTodo, input, setInput } = useContext(TodoContext);

  const inputHandler = (event) => {
    setInput(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    if (input !== "") {
      addTodo(input);
    }
  };
  return (
    <form onSubmit={submitHandler} >
      <input type="text" onChange={inputHandler} value={input} className={classes.input}/>
      <button type="submit" id="submit" className={classes["form-button"]}>
        Add
      </button>
    </form>
  );
};

export default Input;
