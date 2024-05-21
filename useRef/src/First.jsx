import React, { useRef, useEffect } from "react";

const first = () => {
  const inputref = useRef(null);
  useEffect(() => {
    inputref.current.focus();
  }, []);
  const printValue = () => {
    console.log(inputref.current.value);
  };
  return (
    <div>
      <input
        ref={inputref}
        onChange={printValue}
        placeholder="enter your task"
      />
    </div>
  );
};

export default first;
