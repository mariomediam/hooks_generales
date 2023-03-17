// import { useCounter } from "../hooks/useCounter";
// import { useFetch } from "../hooks/useFetch";

import { useCounter, useFetch } from "../hooks";
import { LoadingQuote } from "./LoadingQuote";
import { Quote } from "./Quote";

export const MultipleCustomhooks = () => {
  const { counter, increment } = useCounter(1);

  const { data, isLoading, hasError } = useFetch(
    `https://pokeapi.co/api/v2/pokemon/${counter}`
  );

  const { species } = !!data && data;
  const { name } = !!species && species;

//   if (isLoading) {
//     return <h1>Cargando ...</h1>;
//   }

  return (
    <>
      <h1>BreakingBad Quotes</h1>
      <hr />

      {isLoading ? (
        <LoadingQuote />
      ) : (
        <Quote name={name} />
       
      )}

      <button className="btn btn-primary" onClick={ () => increment() }>Next quote</button>
    </>
  );
};
