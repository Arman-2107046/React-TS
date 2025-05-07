import React from "react";
import MyProvider from "./components/ContextApi/MyContext";
import NewCounter from "./components/ContextApi/NewCounter";

const App = () => {
  return (
    <div>
      <MyProvider>
        <NewCounter />
      </MyProvider>
    </div>
  );
};

export default App;
