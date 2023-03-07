const selectCart = (state) => {
  return state.cart.map((item) => item);
};

export { selectCart };
