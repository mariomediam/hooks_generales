import { useState } from "react";

export const useForm = (initialValue) => {
  const [formState, setFormState] = useState(initialValue);

  const onInputChange = ( name, value ) => {
    setFormState({ ...formState, [name]: value });
  };

  const onResetForm = () => {
    setFormState(initialValue)
  }

  return {
    formState,
    onInputChange,
    onResetForm
  }
};
