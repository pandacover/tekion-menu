const cartActions = {
  INIT_FROM_LOCALSTORAGE: "INIT_FROM_LOCALSTORAGE",
  ADD_ITEM: "ADD_ITEM",
  REMOVE_ITEM: "REMOVE_ITEM",
  RESET: "RESET",
};

export const initCartFromLocalStorage = (cartFromLocalStorage) => ({
  type: cartActions.INIT_FROM_LOCALSTORAGE,
  payload: { cartFromLocalStorage },
});

export const addItem = (item) => ({
  type: cartActions.ADD_ITEM,
  payload: { item },
});

export const removeItem = (item) => ({
  type: cartActions.REMOVE_ITEM,
  payload: { item },
});

export const reset = () => ({ type: cartActions.RESET });

export default Object.freeze(cartActions);
