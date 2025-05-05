import React, { useState } from "react";

const TodoList = () => {
  const [inputArray, setInputArray] = useState<string[]>([]);

  const [input, setInput] = useState<string>("");

  function handleClick() {
    setInputArray([...inputArray, input]);

    setTimeout(() => {
      setInput("");
    }, 500);
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Enter new todo"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleClick}>Insert</button>

      {inputArray.map((item, index) => (
        <li key={index}> {item}</li>
      ))}
    </div>
  );
};

export default TodoList;
