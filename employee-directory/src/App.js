import React from 'react';
import './App.css';
import './components/Table';
import Container from "./components/Container";
import Table from "./components/Table";
import Navbar from "./components/Navbar";
import Header from "./components/Header";

const headerText = 'Employee Directory';
//be able to sort by at least one category
//filter users by at least one property
function App() {
  return (
  
    <div className="App">
       
      <header className="App-header">
      <Header headerText = {headerText}/>
      <Navbar/>
        <Container style={{ minHeight: "80%"  }}>
        <Table/>
        </Container>
      </header>
    </div>
  );
}

export default App;
