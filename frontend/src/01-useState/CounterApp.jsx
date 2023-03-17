import { useState } from "react";

export const CounterApp = () => {

    const [ counters, setCounter] = useState({
        counter1: 10,
        counter2: 20,
        counter3: 30
    })

    const {counter1, counter2, counter3 } = counters;

  return (
    <>
      <h1>CounterApp</h1>
        <p>Counter1 {counter1}</p>
        <p>Counter2 {counter2}</p>
        <p>Counter3 {counter3}</p>
        <button onClick={ () => setCounter({...counters, "counter1": counter1 + 1})}> +1 </button>
    </>
  );
};
