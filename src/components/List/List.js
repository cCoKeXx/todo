import React, { useContext } from "react";
import TodoContext from "../../store/todo-context";
import classes from "./List.module.css";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";

const List = () => {
  const { todos, removeTodo, editTodo, toggleCheckbox } =
    useContext(TodoContext);
  return (
    <ul className={classes.list}>
      {todos.map((todo, index) => (
        <li
          key={index}
          className={index % 2 === 0 ? classes.grayBackground : ""}
        >
          <input
            type="checkbox"
            checked={todo.checkbox}
            onChange={() => {
              toggleCheckbox(index);
            }}
          ></input>
          <p className={classes.text}> {todo.input}</p>

          <div>
            <button
              onClick={() => {
                editTodo(index);
              }}
              className={`${classes.button} ${classes.editButton}`}
            >
              <AiOutlineEdit size={25} />
            </button>
            <button
              onClick={() => {
                removeTodo(index);
              }}
              className={`${classes.button} ${classes.removeButton}`}
            >
              <AiOutlineDelete size={25} />
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default List;
