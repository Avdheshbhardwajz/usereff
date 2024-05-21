import React from "react";
import "./index.css";
import First from "./First";
import Second from "./Second";

const App = () => {
  return (
    <div className="text-2xl min-h-screen flex flex-row justify-center gap-5 items-center">
      <First />
      <Second />
    </div>
  );
};

export default App;
