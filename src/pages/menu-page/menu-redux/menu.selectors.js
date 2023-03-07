const selectMenu = (state) => {
  return state.menu.map((item) => item);
};

export { selectMenu };
