import React from "react";
import Task from "./Task";

const TaskList = (props) => {
  const active = props.tasks.filter((task) => task.active);
  const done = props.tasks.filter((task) => !task.active);

  const activeTasks = active.map((task) => (
    <Task
      key={task.id}
      task={task}
      delete={props.delete}
      change={props.change}
    />
  ));

  const doneTasks = done.map((task) => (
    <Task
      key={task.id}
      task={task}
      delete={props.delete}
      change={props.change}
    />
  ));

  return (
    <div id="tasklist">
      <div className="active">
        <h3>Zadania do zrobienia</h3>
        <ul>
          {activeTasks.length > 0 ? activeTasks : "Brak zadań do wyświetlenia"}
        </ul>
      </div>
      <hr />
      <div className="unactive">
        <h3>Zadania zrobione: {doneTasks.length}</h3>
        <ul>{doneTasks.length > 0 ? doneTasks : "Brak ukończonych zadań"}</ul>
      </div>
    </div>
  );
};

export default TaskList;
