import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// ticket data from json
import data from './ticket.json'

const { tickets = [] } = data;
const sortedTickets = tickets.slice()
  .sort((obj1, obj2) => (obj1.price - obj2.price))

class App extends Component {

  

  render() {
    return (
      <div className="App">
       
      </div>
    );
  }
}

export default App;
