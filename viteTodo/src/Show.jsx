import React from "react";

const Show = ({ task }) => {
  return (
    <div>
      {task.map((task) => (
        <div key={task.id}>{task.name}</div>
      ))}
    </div>
  );
};

export default Show;
