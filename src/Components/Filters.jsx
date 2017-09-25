import React, { Component } from 'react';

import { arrayToObject } from '../utils';

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
      <form className="Filters">
        {stops.length > 1 && <label key={-1} htmlFor="stops_ALL">
          <input
            name="ALL"
            type="checkbox"
            checked={isAllStops}
            onChange={this.handleChange}
          />
          Все
        </label>}
        {stops.map(number =>
          (<label key={number} htmlFor={`stops_${number}`} >
            <input
              name={number}
              type="checkbox"
              checked={this.toggleCheckbox(number)}
              onChange={this.handleChange}
            />
            {`stops_${number}`}
          </label>),
        )}
      </form>
    );
  }
}

export default Filters;
