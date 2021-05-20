import React from "react";

const Task = (props) => {
  const { text, date, id, active, important, finishDate } = props.task;

  const style = {
    color: "red",
  };

  if (active) {
    return (
      <li>
        <p>
          <strong style={important ? style : null}>{text}</strong> -- {date}{" "}
          <button onClick={() => props.change(id)}>Zakończone</button>
          <button onClick={() => props.delete(id)}>X</button>
        </p>
      </li>
    );
  } else {
    const finish = new Date(finishDate).toLocaleString();

    return (
      <p>
        {text} Wykonane: {finish}{" "}
        <button onClick={() => props.delete(id)}>X</button>
      </p>
    );
  }
};

export default Task;
