import React, { Component } from "react";

export default class Forms extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "coconut",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  handleSubmit(event) {
    alert('Your favorite flavor is: ' + this.state.value);
    event.preventDefault();
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Select:
            <select value={this.state.value} onChange={this.handleChange}>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option selected value="coconut">
              Coconut
            </option>
            <option value="mango">Mango</option>
          </select>
          </label>
          <input type="submit" value="Submit" />
          
        </form>
      </div>
    );
  }
}
