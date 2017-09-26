import React, { Component } from 'react';

import './App.css';
import { sortByValue, getStops, filterTickets } from './utils';

// ticket data from json
import data from './ticket.json';

import Ticket from './Components/Ticket';
import Filters from './Components/Filters';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      unchecked: {},
      isAllStops: true,
    };
    this.updateState = this.updateState.bind(this);
  }

  updateState(config) {
    this.setState(config);
  }

  render() {
    const { tickets = [] } = data;
    const { unchecked, isAllStops } = this.state;
    const stops = getStops(tickets);
    const filters = Object.keys(unchecked);
    const sortedTickets = sortByValue(tickets);
    const result = filterTickets(sortedTickets, filters);

    return (
      <div className="App">
        <Filters
          updateState={this.updateState}
          stops={stops}
          unchecked={unchecked}
          isAllStops={isAllStops}
        />
        <div className="Tickets">
          {result.length === 0 && <p>К сожалению, по заддынм критериям поиска не нашлось предложений</p>}
          {result.map(ticket =>
            (<Ticket
              price={ticket.price}
              origin={ticket.origin_name}
              destination={ticket.destination_name}
              stops={ticket.stops}
            />),
          )}
        </div>
      </div>
    );
  }
}

export default App;
