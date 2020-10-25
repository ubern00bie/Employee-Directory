import React, { Component } from 'react';
import './App.css';
import './components/Table';
import Container from "./components/Container";
import Table from "./components/Table";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Form from "./components/Form";

const headerText = 'Employee Directory';
//be able to sort by at least one category
//filter users by at least one property
class App extends Component {
  render(){
  return (
    <div className="App"> 
        <Header headerText = {headerText} />
        <Navbar />
        <Container style={{ minHeight: "80%" }}>
          <Table />
          <Form />
        </Container>
    </div>
  );
}
}

export default App;
