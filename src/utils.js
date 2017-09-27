// sort array of objects by one value
export const sortByValue = (array, value = 'price') =>
  array.slice().sort((obj1, obj2) => obj1[value] - obj2[value]);

// get array of stops
export const getStops = (array) => {
  const allStops = array.map(ticket => ticket.stops);
  return allStops.filter((iter, index) => (
    // check on uniqe
    allStops.indexOf(iter) === index
  )).sort();
};

// convert array to object with the same value 
export const arrayToObject = (array, value) => (
  Object.assign(...array.map(key => ({ [key]: value })))
);

export const filterTickets = (tickets, filters) => (
  tickets.filter(ticket => filters.indexOf(String(ticket.stops)) === -1)
);
