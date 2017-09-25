import React, { Component } from 'react';

import './App.css';
import { sortByValue, getStops } from './utils';

// ticket data from json
import data from './ticket.json';

import Ticket from './Components/Ticket';
import Filters from './Components/Filters';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { unchecked: {} };
    this.updateState = this.updateState.bind(this);
  }

  updateState(config) {
    this.setState(config);
  }

  render() {
    const { tickets = [] } = data;
    const { unchecked } = this.state;
    const stops = getStops(tickets);
    const sortedTickets = sortByValue(tickets);

    return (
      <div className="App">
        <Filters updateState={this.updateState} stops={stops} unchecked={unchecked} />
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
