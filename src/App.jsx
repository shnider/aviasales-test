import React, { Component } from 'react';
import './App.css';
import sort from './utils';
// ticket data from json
import data from './ticket.json';

import Ticket from './Components/Ticket';


class App extends Component {
  state = {};

  render() {
    const { tickets = [] } = data;
    const sortedTickets = sort(tickets);
    return (
      <div className="App">
        {sortedTickets.map(ticket =>
          (<Ticket
            price={ticket.price}
            origin={ticket.origin_name}
            destination={ticket.destination_name}
            stops={ticket.stops}
          />),
        )}
      </div>
    );
  }
}

export default App;
