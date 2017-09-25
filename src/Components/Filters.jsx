import React, { Component } from 'react';

class Filters extends Component {
  handleChange = (e) => {
    const { unchecked } = this.props;
    const name = e.target.name;
    if (name in unchecked) {
      const { [name]: omit, ...newObj } = unchecked;
      this.props.updateState({ unchecked: newObj });
      return true;
    }
    const newObj = Object.assign({}, unchecked, { [name]: true });
    this.props.updateState({ unchecked: newObj });
    return false;
  }

  toggleCheckbox = (number) => {
    const name = `stops_${number}`;
    if (name in this.props.unchecked) {
      return false;
    }
    return true;
  }

  render() {
    const { stops } = this.props;
    return (
      <form className="Filters">
        {stops.length > 1 && <label key={-1} htmlFor="stops_ALL">
          <input
            name="ALL"
            type="checkbox"
          />
          Все
        </label>}
        {stops.map(number =>
          (<label key={number} htmlFor={`stops_${number}`} >
            <input
              name={`stops_${number}`}
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
