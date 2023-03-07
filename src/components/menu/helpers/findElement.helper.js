const findElement = (array, id) => {
  const find = (el) => el.id === id;
  return array.find(find);
};

export default findElement;
