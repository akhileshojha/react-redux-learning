// FormComponent.js
import React from "react";
import useForm from "./useForm";

const FormComponent = () => {
  const [values, handleChange] = useForm({ username: "", email: "" });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(values);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="username"
        value={values.username}
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        value={values.email}
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default FormComponent;
