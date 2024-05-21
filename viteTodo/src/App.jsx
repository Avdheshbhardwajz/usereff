import React from "react";
import { useState } from "react";
import Show from "./Show";

const App = () => {
  const [task, settask] = useState([]);
  const [singletask, setsingletask] = useState("");

  function handletask(e) {
    e.preventDefault();
    let obj = {
      name: singletask,
      id: Date.now() + Math.random(),
    };
    settask((prevtask) => {
      let updatedtasks = [...prevtask, obj];
      return updatedtasks;
    });

    setsingletask("");
  }

  return (
    <div className="min-h-screen bg-lime-500 text-3xl">
      <form onSubmit={handletask}>
        <label htmlFor="task">Enter your task here </label>
        <input
          className="p-2 text-2xl"
          id="task"
          value={singletask}
          onChange={(e) => {
            setsingletask(e.target.value);
          }}
        />
        <button className="p-4 text-2xl">Add</button>
      </form>

      <Show task={task} />
    </div>
  );
};

export default App;
