import React, { FormEvent, useRef, useState } from "react";

interface FormInfo {
  name: string;
  email: string;
}

const NewContactForm = () => {
  const [formData, setFormData] = useState<FormInfo>({
    name: "",
    email: "",
  });

  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setFormData({
      name: nameRef.current!.value,
      email: emailRef.current!.value,
    });

    setTimeout(() => {
nameRef.current!.value='';
emailRef.current!.value='';

    }, 700);
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" ref={nameRef} />
        <input type="email" placeholder="Email" ref={emailRef} />

        <button type="submit">Submit</button>

        <section>
          <h3>Name: {formData.name}</h3>
          <h3>Email: {formData.email}</h3>
        </section>
      </form>
    </div>
  );
};

export default NewContactForm;
