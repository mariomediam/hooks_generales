import { useLayoutEffect, useRef, useState } from "react";

export const Quote = ({ name }) => {
  const [boxSize, setBoxSize] = useState({
    width: 0,
    height: 0,
  });
  const pRef = useRef();

  useLayoutEffect(() => {
    const { width, height } =  pRef.current.getBoundingClientRect();
    setBoxSize({ width, height })

  }, [name]);

  return (
    <>
      <blockquote className="blockquote text-end" style={{ display: "flex" }}>
        <p className="mb-1" ref={pRef}>
          {name}
        </p>
        <footer className="blockquote-footer">bbbb</footer>
      </blockquote>
      {JSON.stringify(boxSize)}
    </>
  );
};
