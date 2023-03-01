import React from 'react';

const TodoContext = React.createContext({
    todos:[],
    addTodo: (todo)=>{},
    removeTodo: (index)=>{}
})

export default TodoContext;