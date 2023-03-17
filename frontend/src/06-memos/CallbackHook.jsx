import { useCallback, useState } from "react";
import { ShowIncrement } from "./ShowIncrement";


export const CallbackHook = () => {
const [counter, setCounter] = useState(10)

const increment = useCallback(
  (step) => {
    setCounter( (value) => value + step)
  },
  [],
)


// const increment = () => {
//     setCounter(counter + 1);    
// }


  return (
    <>
      <h1>useCallBack Hook: { counter }</h1>
      <hr />
      <ShowIncrement increment={ increment } />
    </>
  );
};
