import React, { useRef } from "react";

const Second = () => {
  const boxRef = useRef(null);

  const colorf = () => {
    // Add the Tailwind class to change the background color
    boxRef.current.classList.add("bg-slate-600");
  };

  return (
    <div
      ref={boxRef} // Attach the ref to the div
      onClick={colorf}
      className="p-10 bg-gray-400"
    >
      This will change its color
    </div>
  );
};

export default Second;
