import actions from "./cart.actions";

const getCartFromLocalStorage = () => {
  try {
    const cartFromLocalStorage = localStorage.getItem("cart");
    if (!cartFromLocalStorage) return [];
    return JSON.parse(cartFromLocalStorage);
  } catch (error) {
    console.error(error);
    return [];
  }
};

const initialState = [];

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.INIT_FROM_LOCALSTORAGE: {
      const cartFromLocalStorage = getCartFromLocalStorage();
      return cartFromLocalStorage;
    }
    case actions.ADD_ITEM: {
      const targetItem = state.find((el) => el.id === action.payload.item.id);
      let stateWithoutItem = state.filter(
        (el) => el.id !== action.payload.item.id
      );
      if (targetItem) {
        return [
          ...stateWithoutItem,
          { ...targetItem, quantity: targetItem.quantity + 1 },
        ];
      }
      return [...stateWithoutItem, { ...action.payload.item, quantity: 1 }];
    }
    case actions.REMOVE_ITEM: {
      return state
        .map((el) => {
          if (el.id === action.payload.item.id)
            return { ...el, quantity: el.quantity - 1 };
          return el;
        })
        .filter((el) => el.quantity > 0);
    }
    case actions.RESET: {
      return [];
    }
    default: {
      return state;
    }
  }
};

export default cartReducer;
