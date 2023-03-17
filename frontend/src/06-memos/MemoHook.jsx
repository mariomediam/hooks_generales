import React, { useMemo, useState } from "react";
import { useCounter } from "../hooks";

const heavyStuff = (iterarionNumber = 100) => {
  for (let i = 0; i < iterarionNumber; i++) {
    console.log("Ahi vamos...");
  }

  return `${iterarionNumber} iteraciones realizadas`;
};

export const MemoHook = () => {
  const { counter, increment, decrement } = useCounter(4000);
  const [showText, setShowText] = useState(true);

  const memorizedValue = useMemo(() => heavyStuff(counter), [counter]);

  return (
    <>
      <h1>
        Counter <small> {counter}</small>
      </h1>
      <hr />

      {JSON.stringify(showText)}

      {/* <h4> {heavyStuff(counter)}</h4> */}
      <h4> {memorizedValue}</h4>

      <hr />

      <button className="btn btn-primary" onClick={() => increment()}>
        +1
      </button>

      <button className="btn btn-primary" onClick={() => decrement()}>
        -1
      </button>

      <button
        className="btn btn-primary"
        onClick={() => setShowText(!showText)}
      >
        {" "}
        Show{" "}
      </button>
    </>
  );
};
