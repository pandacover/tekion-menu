const calculatePrice = (array) => {
  const calculate = (acc, el) => acc + el.price * el.quantity;
  return array.reduce(calculate, 0);
};

export default calculatePrice;
