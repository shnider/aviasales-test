const sort = (array, value = 'price') =>
  array.slice().sort((obj1, obj2) => obj1[value] - obj2[value]);

export default sort;
