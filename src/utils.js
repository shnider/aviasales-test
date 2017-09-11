// sort array of objects by one value
export const sortByValue = (array, value = 'price') =>
  array.slice().sort((obj1, obj2) => obj1[value] - obj2[value]);

export const getMaximumStops = (array) => {
  const ticketMaxStops = array.reduce((current, ticket) => {
    if (ticket.stops > current.stops) {
      return ticket;
    }
    return current;
  });
  return ticketMaxStops.stops;
};
