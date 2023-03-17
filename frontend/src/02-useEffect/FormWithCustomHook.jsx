import { useState } from "react";
import { useForm } from "../hooks/useForm";

export const FormWithCustomHook = () => {

    const { formState, onInputChange, onResetForm} = useForm({
        username: "",
        email: "",
        password: ""
      }
      )
    // const [formState, setFormState] = useState({
    //     username: "",
    //     email: "",
    //     password: ""
    //   });
    
      const { username, email, password } = formState;
    
    //   const onInputChange = ({ target: { name, value } }) => {
    //     setFormState({ ...formState, [name]: value });
    //   };
    
      return (
        <>
          <h1>Formulario Simple {email}</h1>
          <hr />
          <input
            type="text"
            className="form-control"
            placeholder="Username"
            name="username"
            onChange={ ({ target }) => onInputChange( target.name, target.value )}
            value={username}
          />
          <input
            type="email"
            className="form-control mt-2"
            placeholder="email"
            name="email"
            onChange={ ({ target }) => onInputChange( target.name, target.value )}
            value={email}
          />
          <input
            type="password"
            className="form-control mt-2"
            placeholder="password"
            name="password"
            onChange={ ({ target }) => onInputChange( target.name, target.value )}
            value={password}
          />
          <button className="btn btn-primary mt-2" onClick={ onResetForm }> Reset </button>
        </>
      );
    
}
