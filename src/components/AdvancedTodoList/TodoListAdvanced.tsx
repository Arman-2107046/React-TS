import React, { useState } from "react";

const TodoListAdvanced = () => {
  interface Todo {
    id: number;
    task: string;
    completed: boolean;
  }

  const [todos, setTodos] = useState<Todo[]>([
    { id: 101, task: "Watching TV", completed: false },
    { id: 102, task: "Washing Clothes", completed: false },
  ]);

  function addTodo(newTodo:string)
  {

    const element:Todo={
        id:todos.length+1,
        task:newTodo,
        completed:false
    };

    setTodos([...todos,element]);
  }

  return <div>

<button onClick={()=>(addTodo("New Todo"))}>Add Todo</button>

{
todos.map(({id,task,completed}:Todo)=>
(
    <li key={id}>{task} {completed}</li>
))
}
  </div>;
};

export default TodoListAdvanced;
