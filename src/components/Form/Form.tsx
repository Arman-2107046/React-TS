import React, { FormEvent, useRef, useState } from "react";

const Form = () => {
  type FormData = {
    name: string;
    email: string;
    password: string;
  };

  const [submittedData, setSubmittedData] = useState<FormData>({
    name: "",
    email: "",
    password: "",
  });

  const name = useRef<HTMLInputElement>(null);
  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const nameValue = name.current!.value;
    const emailValue = email.current!.value;
    const passwordValue = password.current!.value;

    setSubmittedData({
      name: nameValue,
      email: emailValue,
      password: passwordValue,
    });
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter Name" ref={name} />
        <input type="email" placeholder="Enter Email" ref={email} />
        <input type="password" placeholder="Enter Password" ref={password} />

        <button type="submit">Submit</button>
      </form>

      <section>
        <h1>Name: {submittedData.name}</h1>
        <h1>Email: {submittedData.email}</h1>
        <h1>Password: {submittedData.password}</h1>
      </section>
    </div>
  );
};

export default Form;

// import React, { FormEvent, useRef, useState } from "react";

// const Form = () => {
//   type formData = {
//     name: string;
//     email: string;
//     password: string;
//   };
//   const [submittedData, setSubmittedData] = useState<formData>({
//     name: "",
//     email: "",
//     password: "",
//   });

//   const name = useRef<HTMLInputElement>(null);
//   const email = useRef<HTMLInputElement>(null);
//   const password = useRef<HTMLInputElement>(null);

//   function handleSubmit(event: FormEvent<HTMLFormElement>) {
//     event.preventDefault();

//     const nameValue = name.current!.value;
//     const emailValue = email.current!.value;
//     const passwordValue = password.current!.value;

//     setSubmittedData({
//       name: nameValue,
//       email: emailValue,
//       password: passwordValue,
//     });
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <input type="text" placeholder="Enter Your Name" ref={name} /> <br />
//       <input type="email" placeholder="Enter Your Email" ref={email} />
//       <br />
//       <input type="password" placeholder="Enter Your Password" ref={password} />
//       <br />
//       <button type="submit">Submit</button>
//       <section>
//         <h1>Name: {submittedData.name}</h1>
//         <h1>Email: {submittedData.email}</h1>
//         <h1>Password: {submittedData.password}</h1>
//       </section>
//     </form>
//   );
// };

// export default Form;
