import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import styled from 'styled-components';

import './App.css';
import { sortByValue, getStops, filterTickets } from './utils';

// ticket data from json
import data from './ticket.json';

import Header from './Components/Header';
import Ticket from './Components/Ticket';
import Filters from './Components/Filters';

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 64rem;
  margin: 0 auto;
`;

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
    const result = isAllStops ? sortedTickets : filterTickets(sortedTickets, filters);

    return (

      <AppWrapper>
        <Header />
        <Grid>
          <Row>
            <Col mdOffset={1} md={3}>
              <Filters
                updateState={this.updateState}
                stops={stops}
                unchecked={unchecked}
                isAllStops={isAllStops}
              />
            </Col>
            <Col md={7}>
              <div className="Tickets">
                {result.length === 0 &&
                <p>К сожалению, по заддынм критериям поиска не нашлось предложений</p>}
                {result.map(ticket =>
                  (<Ticket
                    price={ticket.price}
                    origin={ticket.origin_name}
                    destination={ticket.destination_name}
                    stops={ticket.stops}
                  />),
                )}
              </div>
            </Col>
          </Row>
        </Grid>
      </AppWrapper>

    );
  }
}

export default App;
