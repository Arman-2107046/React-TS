import React from "react";

const EventHandling = () => {
  function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
    console.log("Button Clicked", e.currentTarget);
  }

  function handleMouseEnter(e: React.MouseEvent<HTMLDivElement>) {
    console.log("Mouse Entrered", e.currentTarget);
  }

  return (
    <div onMouseEnter={handleMouseEnter}>
      <h2>Click The Button</h2>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
};

export default EventHandling;
