import React, { useState } from "react";
import UserProfile from "./components/basic-usestate-typing/UserProfile";

const App = () => {
  function increment() {
    setCount(count + 1);
  }

  const [count, setCount] = useState<number>(0);
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <br />
      <br />
      <br />
      <UserProfile />
    </div>
  );
};

export default App;
