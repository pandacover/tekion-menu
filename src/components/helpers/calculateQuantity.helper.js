const calculateQuantity = (array) => {
  const calculate = (acc, el) => acc + el.quantity;
  return array.reduce(calculate, 0);
};

export default calculateQuantity;
