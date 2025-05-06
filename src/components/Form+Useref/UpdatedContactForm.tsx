import React, { ChangeEvent, FormEvent, useState } from "react";

const UpdatedContactForm = () => {
  interface FormInfo {
    name: string;
    email: string;
  }

  const [formData, setFormData] = useState<FormInfo>({
    name: "",
    email: "",
  });

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;

    setFormData((prevState) => ({ ...prevState, [name]: value }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    console.log("Form Submitted"+ FormData);

    // setTimeout(() => {
    //     setFormData({
    //         name:"",
    //         email:""
    //     })
    // }, 700);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </label>
<br />
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
      </div>

      <button type="submit">Submit</button>

      <section>
        <h3>Name: {formData.name}</h3>
        <h3>Email: {formData.email}</h3>
      </section>
    </form>
  );
};

export default UpdatedContactForm;
