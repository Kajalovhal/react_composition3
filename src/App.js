// App.js
import React from "react";
import Form from "./component/form";

const fields = [
  { name: "username", type: "text", label: "Username" },
  { name: "password", type: "password", label: "Password" },
  // Add more fields as needed
];

const onSubmitHandler = (values) => {
  console.log("Form submitted with values:", values);
};

const App = () => {
  return (
    <div>
      <h1>My Form</h1>
      <Form onSubmit={onSubmitHandler} fields={fields} />
    </div>
  );
};

export default App;
