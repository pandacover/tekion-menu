import cartActions from "./cart.actions";

export const initCartFromLocalStorage = () => ({
  type: cartActions.INIT_FROM_LOCALSTORAGE,
});

export const addItem = (payload) => ({
  type: cartActions.ADD_ITEM,
  payload: { item: payload },
});

export const removeItem = (payload) => ({
  type: cartActions.REMOVE_ITEM,
  payload: { item: payload },
});

export const reset = () => ({ type: cartActions.RESET });
