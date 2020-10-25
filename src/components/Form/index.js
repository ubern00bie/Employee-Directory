import React, { Component } from "react";
import "./style.css";

class Form extends Component {
  // Setting the component's initial state
  state = {
    firstName: "",
    lastName: "",
    title: ""
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

    // Alert the user their first and last name, clear `this.state.firstName` and `this.state.lastName`, clearing the inputs
    alert(`Add employee: ${this.state.firstName} ${this.state.lastName}`);
    // this.setState({
    //   firstName: "",
    //   lastName: ""
    // });
  };

  handleSearch = event => {
    event.preventDefault()
  }

  render() {
    // Notice how each input has a `value`, `name`, and `onChange` prop
    return (
      <div>
        <p>
          Employee's Full Name: {this.state.firstName} {this.state.lastName}
        </p>
        <form onSubmit={this.handleFormSubmit} className="form">
          <label htmlFor="firstName">First Name:</label>
          <input
            id='firstName'
            value={this.state.firstName}
            name="firstName"
            onChange={this.handleInputChange}
            type="text"
            placeholder="First Name"
          />
          <label htmlFor="LastName">Last Name:</label>
          <input
           id='lastName'
            value={this.state.lastName}
            name="lastName"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Last Name"
          />
           <label htmlFor="title">Job Title:</label>
          <input
            id='title'
            value={this.state.title}
            name="title"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Job Title"
          />
          <button onClick={this.handleFormSubmit}>Submit</button>
          <button onClick={this.handleSearch}>Search</button>
        </form>
      </div>
    );
  }
}

export default Form;
