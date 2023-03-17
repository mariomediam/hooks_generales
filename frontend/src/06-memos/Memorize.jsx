import React, { useState } from "react";
import { useCounter } from "../hooks";
import { Small } from "./Small";

export const Memorize = () => {
  const { counter, increment } = useCounter(10);

  const [showText, setShowText] = useState(true);

  return (
    <>
      <h1>
        Counter <Small counter={counter} />
      </h1>
      <hr />

      { JSON.stringify(showText)}

      <hr />

      <button className="btn btn-primary" onClick={() => increment()}>
        +1
      </button>

      <button className="btn btn-primary" onClick={ () => setShowText(!showText)} > Show </button>


    </>
  );
};
