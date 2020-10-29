import React, { Component } from "react";
import "./style.css";

class Form extends Component {
  // Setting the component's initial state
  state = {
    firstName: ""
  };

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = event.target;

    // Updating the input's state
    this.setState({
      [name]: value
    });
  };


  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();
    alert(`Add employee: ${this.state.firstName} ${this.state.lastName}`);

  };

  handleSearch = event => {
    event.preventDefault()
  }

  render() {
    // Notice how each input has a `value`, `name`, and `onChange` prop
    return (
      <div>
        <form onSubmit={this.handleFormSubmit} className="form">
          <label htmlFor="lastName"> Filter by last name:</label>
          <input
            id='lastName'
            value={this.state.lastName}
            name="lastName"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Last Name"
          />
          <button onClick={this.handleSearch}>Search</button>
        </form>
      </div>
    );
  }
}

export default Form;
