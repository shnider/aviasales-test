import React, { Component } from 'react';
import styled from 'styled-components';

import { arrayToObject } from '../utils';

const Aside = styled.aside`
  background-color: #FFF;
  box-shadow: 0px 1px 4px rgba(91, 137, 164, 0.25);
  border-radius: 5px;
`;

const Heading = styled.h2`
  margin: 0;
  padding: 1rem 3.5rem 0.5rem 1rem;
  font-style: normal;
  font-weight: normal;
  font-size: 0.75rem;
  line-height: 1.25rem;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  color: #4A4A4A;
`;

const Label = styled.label`
  display: block;
  margin-left: 1rem;
  font-family: "Open Sans";
  font-size: 13px;
  line-height: 2.2rem;
  font-style: normal;
  font-weight: normal;
  color: #4A4A4A;
`;

const Checkbox = styled.span`
  display: inline-block;
  box-sizing: border-box;
  margin-right: 0.7rem;
`;

const CheckboxFace = styled.span`
  display: inline-block;
  margin-bottom: -5px;
  box-sizing: border-box;
  width: 19px;
  height: 19px;
  border: 1px solid #D2D5D6;
  border-radius: 3px;
  cursor:pointer;
`;

class Filters extends Component {
  handleChange = (e) => {
    const { unchecked, stops, isAllStops, updateState } = this.props;
    const name = e.target.name;
    if (name === 'ALL') {
      const newObj = isAllStops ? arrayToObject(stops, true) : {};
      updateState({ unchecked: newObj, isAllStops: !isAllStops });
    } else if (name in unchecked) {
      const { [name]: omit, ...newObj } = unchecked;
      const isAllActive = Object.keys(newObj).length === 0 || false;
      updateState({ unchecked: newObj, isAllStops: isAllActive });
    } else {
      const newObj = Object.assign({}, unchecked, { [name]: true });
      updateState({ unchecked: newObj, isAllStops: false });
    }
  }

  toggleCheckbox = (number) => {
    if (number in this.props.unchecked) {
      return false;
    }
    return true;
  }

  render() {
    const { stops, isAllStops } = this.props;
    return (
      <Aside>
        <Heading>Количество пересадок</Heading>
        {stops.length > 1 &&
        <Label key={-1} htmlFor="stops_ALL">
          <input
            name="ALL"
            type="checkbox"
            checked={isAllStops}
            onChange={this.handleChange}
          />
          Все
        </Label>}
        {stops.map(number =>
          (<Label key={number} htmlFor={`stops_${number}`} >
            <input
              name={number}
              type="checkbox"
              checked={this.toggleCheckbox(number)}
              onChange={this.handleChange}
            />
            {`stops_${number}`}
          </Label>),
        )}
      </Aside>
    );
  }
}

export default Filters;
