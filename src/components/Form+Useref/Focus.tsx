import React, { useRef } from "react";

const Focus = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  function handleFocus() {
    inputRef.current?.focus();
  }
  return (
    <div>
      <input
        type="text"
        placeholder="Click the button to focus me"
        ref={inputRef}
      />

      <button onClick={handleFocus}>Focus</button>
    </div>
  );
};

export default Focus;
