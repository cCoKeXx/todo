import React, { useContext } from "react";
import "./App.css";

import TodoContext from "./store/todo-context";
import Input from "./components/Input/Input";
import List from "./components/List/List";

function App() {
  const { todos } = useContext(TodoContext);
  return (
    <div className="App">
      <div className="card">
        <h3>Todos:{todos.length}</h3>
        <Input />
        { todos.length > 0 &&<List />}
      </div>
    </div>
  );
}

export default App;
