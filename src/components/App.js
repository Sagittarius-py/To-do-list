import React, { Component } from "react";
import AddTask from "./AddTask";
import TaskList from "./TaskList";

class App extends Component {
  state = {
    tasks: [
      {
        id: 0,
        text: "cokolwiek",
        date: "2029-02-15",
        important: true,
        active: true,
        finishDate: null,
      },
      {
        id: 1,
        text: "dupa",
        date: "2025-12-02",
        important: false,
        active: true,
        finishDate: null,
      },
      {
        id: 2,
        text: "wypic w koncu kawe",
        date: "2021-05-10",
        important: true,
        active: true,
        finishDate: null,
      },
    ],
  };
  counterer = this.state.tasks.length;
  amountAdded = 0;

  addTask = (text, date, important) => {
    console.log("dodaj");
    let id = this.counterer + this.amountAdded;
    const task = {
      id: id,
      text: text,
      date: date,
      important: important,
      active: true,
      finishDate: null,
    };
    this.amountAdded++;

    this.setState((prevState) => ({
      tasks: [...prevState.tasks, task],
    }));
    return true;
  };

  deleteTask = (id) => {
    //* Opcja pierwsza:
    // const tasks = [...this.state.tasks];
    // const index = tasks.findIndex((task) => task.id === id);
    // tasks.splice(index, 1);
    // this.setState({ tasks });
    //* Opcja druga:
    let tasks = [...this.state.tasks];
    tasks = tasks.filter((task) => task.id !== id);
    this.setState({ tasks });
  };

  changeTaskStatus = (id) => {
    const tasks = [...this.state.tasks];
    tasks.forEach((task) => {
      if (task.id === id) {
        task.active = false;
        task.finishDate = new Date().getTime();
        console.log(task.finishDate);
      }
    });
    this.setState({ tasks });
  };

  render() {
    console.log(this.counterer);
    return (
      <React.Fragment>
        <h1>ToDo App</h1>
        <AddTask add={this.addTask} />
        <TaskList
          tasks={this.state.tasks}
          delete={this.deleteTask}
          change={this.changeTaskStatus}
        />
      </React.Fragment>
    );
  }
}

export default App;
