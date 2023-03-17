import { useState } from "react";

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    username: "mario",
    email: "mario@correo.com",
  });

  const { username, email } = formState;

  const onInputChange = ({ target: { name, value } }) => {
    setFormState({ ...formState, [name]: value });
  };

  return (
    <>
      <h1>Formulario Simple {email}</h1>
      <hr />
      <input
        type="text"
        className="form-control"
        placeholder="Username"
        name="username"
        onChange={onInputChange}
        value={username}
      />
      <input
        type="email"
        className="form-control mt-2"
        placeholder="email"
        name="email"
        onChange={onInputChange}
        value={email}
      />
    </>
  );
};
