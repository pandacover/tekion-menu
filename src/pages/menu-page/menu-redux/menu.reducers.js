import MockData from "../../../mock-data";
import menuActions from "./menu.actions";

const initialState = MockData;

const menuReducer = (state = initialState, action) => {
  const { UPDATE_MENU } = menuActions;

  switch (action.type) {
    case UPDATE_MENU: {
      const nextState = action.payload.nextState;
      return nextState;
    }
    default:
      return state;
  }
};

export default menuReducer;
