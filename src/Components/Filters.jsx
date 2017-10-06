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

const Checkbox = styled.p` 
  margin: 0;
  cursor: pointer;

  > input { display: none; }

  > input + label {
      display: block;
      padding: 0rem 1rem;
      box-sizing: border-box;
      font-family: "Open Sans";
      font-size: 13px;
      line-height: 35px;
      font-style: normal;
      font-weight: normal;
      color: #4A4A4A;
      cursor: pointer;
  }

  > input + label:before {
      content: "";
      display: inline-block;
      margin-right: 0.625rem;
      vertical-align: -6px;
      width: 19px;
      height: 19px;
      border: 1px solid #D2D5D6;
      border-radius: 3px;
  }

  > input:checked + label:before { 
      z-index: 1;
      border: 1px solid #3E9CE8;
      background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOSIgaGVpZ2h0PSI3IiB2aWV3Qm94PSIwIDAgOSA3IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0xLjUgMy41bDIgMiA0LTQiIHN0cm9rZT0iIzBDQjJFMSIgc3Ryb2tlLXdpZHRoPSIyIiBmaWxsPSJub25lIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz48L3N2Zz4=);
      background-repeat: no-repeat;
      background-position: center center;
      background-size: 0.625rem 0.625rem;
  }

  &:last-child {
    margin-bottom: 1rem;
  }

  &:hover {
    background-color: #F1FCFF;
  }
`;

class Filters extends Component {
  handleCheckbox = (e) => {
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

  // handleOnlyButtom = (e) => {

  // }

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
        <Checkbox>
          <input
            type="checkbox"
            name="ALL"
            id="stops_ALL"
            checked={isAllStops}
            onChange={this.handleCheckbox}
          />
          <label key={-1} htmlFor="stops_ALL">Все</label>
        </Checkbox>}
        {stops.map(number =>
          (<Checkbox>
            <input
              name={number}
              id={`stops_${number}`}
              type="checkbox"
              checked={this.toggleCheckbox(number)}
              onChange={this.handleCheckbox}
            />
            <label key={number} htmlFor={`stops_${number}`}>
              {`stops_${number}`}
            </label>
          </Checkbox>),
        )}
      </Aside>
    );
  }
}

export default Filters;
