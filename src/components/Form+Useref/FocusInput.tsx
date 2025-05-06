import React, { FormEvent, useRef, useState } from "react";

const FocusInput = () => {
  const [name, setName] = useState<string>("");
  const nameRef = useRef<HTMLInputElement>(null);

  function handleClick(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const nameValue = nameRef.current!.value;
    setName(nameValue);
  }

  return (
    <form onSubmit={handleClick}>
      <input type="text" placeholder="Enter Name" ref={nameRef} />
      <button type="submit">Submit</button>

      <section>
        <h1>Name: {name}</h1>
      </section>
    </form>
  );
};

export default FocusInput;
