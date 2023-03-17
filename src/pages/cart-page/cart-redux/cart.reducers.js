import actions from "./cart.actions";

const initialState = [];

const cartReducer = (state = initialState, action) => {
  const { INIT_FROM_LOCALSTORAGE, ADD_ITEM, REMOVE_ITEM, RESET } = actions;

  switch (action.type) {
    case INIT_FROM_LOCALSTORAGE: {
      const cartFromLocalStorage = action.payload.cartFromLocalStorage;
      return cartFromLocalStorage;
    }

    case ADD_ITEM: {
      const targetItem = action.payload.item;
      const itemFromState = state.find((el) => el.id === targetItem.id);
      const stateWithoutItem = state.filter((el) => el.id !== targetItem.id);
      let updatedItem = {};

      if (!itemFromState) {
        updatedItem = {
          ...targetItem,
          quantity: 1,
        };
      } else {
        const updatedQuantity = (itemFromState.quantity || 0) + 1;
        updatedItem = {
          ...itemFromState,
          quantity: updatedQuantity,
        };
      }

      const nextState = [...stateWithoutItem, updatedItem];
      return nextState;
    }

    case REMOVE_ITEM: {
      const nextState = state
        .map((el) => {
          if (el.id === action.payload.item.id) {
            const updatedQuantity = (el?.quantity || 0) - 1;
            const updatedEl = { ...el, quantity: updatedQuantity };

            return updatedEl;
          }

          return el;
        })
        .filter((el) => el.quantity > 0);

      return nextState;
    }

    case RESET: {
      return [];
    }

    default: {
      return state;
    }
  }
};

export default cartReducer;
