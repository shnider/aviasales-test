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
  margin: 0 auto;
  width: 64rem;
`;

const SearchResult = styled.div`
  padding-bottom: 7rem;
`;


const FilterMessage = styled.p`
  margin: 0;
  padding: 2rem 1rem;
  font-style: normal;
  font-weight: normal;
  font-size: 1rem;
  line-height: 1.25rem;
  letter-spacing: 0.5px;
  color: #4A4A4A;
  background-color: #FFF;
  box-shadow: 0px 1px 4px rgba(91, 137, 164, 0.25);
  border-radius: 5px;
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
              <SearchResult>
                {result.length === 0 &&
                <FilterMessage>
                  К сожалению, билеты по заданным фильтрам не найдены.
                </FilterMessage>}
                {result.map(ticket =>
                  (<Ticket
                    price={ticket.price}
                    origin={ticket.origin_name}
                    destination={ticket.destination_name}
                    stops={ticket.stops}
                  />),
                )}
              </SearchResult>
            </Col>
          </Row>
        </Grid>
      </AppWrapper>
    );
  }
}

export default App;
