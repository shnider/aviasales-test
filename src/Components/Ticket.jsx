import React from 'react';

export default props =>
  (<div className="Ticket">
    <p>Купить за {props.price} Р</p>
    <p>{props.origin}-{props.destination}</p>
    <p>Пересадок - {props.stops}</p>
  </div>);
