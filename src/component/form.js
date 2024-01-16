// Form.js
import React, { useState } from "react";

const Form = ({ onSubmit, fields }) => {
  const [formValues, setFormValues] = useState({});

  const handleInputChange = (name, value) => {
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(formValues);
  };

  return (
    <form onSubmit={handleSubmit}>
      {fields.map((field) => (
        <div key={field.name}>
          <label htmlFor={field.name}>{field.label}</label>
          <input
            type={field.type}
            id={field.name}
            name={field.name}
            value={formValues[field.name] || ""}
            onChange={(e) => handleInputChange(field.name, e.target.value)}
          />
        </div>
      ))}
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
