import React, { Component } from "react";

class AddTask extends Component {
  state = {
    text: "",
    checked: false,
    date: new Date().toISOString().slice(0, 10),
  };

  handleChange = (e) => {
    if (e.target.id === "text") {
      let textValue = e.target.value;
      this.setState({
        text: textValue,
      });
    } else if (e.target.id === "priorytet") {
      let checkedValue = e.target.checked;
      this.setState({
        checked: checkedValue,
      });
    } else if (e.target.id === "data") {
      let dateValue = e.target.value;
      this.setState({
        date: dateValue,
      });
    } else {
      return null;
    }
  };

  handleSubmit = () => {
    const { text, date, checked } = this.state;
    if (text !== "") {
      const add = this.props.add(text, date, checked);
      if (add) {
        this.setState({
          text: "",
          checked: false,
          date: new Date().toISOString().slice(0, 10),
        });
      }
    } else {
      alert("Text nie może być pisty");
    }
  };

  render() {
    const minDate = new Date().toISOString().slice(0, 10);
    return (
      <React.Fragment>
        <input
          type="text"
          id="text"
          placeholder="dodaj zadanie"
          value={this.state.text}
          onChange={this.handleChange}
        ></input>
        <label id="priorytet" htmlFor="priorytet">
          Priorytet
        </label>
        <input
          type="checkbox"
          id="priorytet"
          checked={this.state.checked}
          onChange={this.handleChange}
        ></input>
        <br />
        <br />
        <label htmlFor="data"> Do kiedy zrobić? </label>
        <input
          type="date"
          id="data"
          value={this.state.date}
          min={minDate}
          onChange={this.handleChange}
        ></input>
        <br />
        <button onClick={this.handleSubmit}>Dodaj</button>
        <hr />
      </React.Fragment>
    );
  }
}

export default AddTask;
