import React from 'react';

export default props =>
  (<div className="Ticket">
    <p>{props.price}</p>
    <p>{props.origin}-{props.destination}</p>
    <p>Пересадок - {props.stops}</p>
  </div>);
