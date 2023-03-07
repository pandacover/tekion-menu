import MockData from "../../../mock-data";
import menuActions from "./menu.actions";

const initialState = MockData;

const menuReducer = (state = initialState, action) => {
  switch (action.type) {
    case menuActions.UPDATE_MENU: {
      return action.payload.nextState;
    }
    default:
      return state;
  }
};

export default menuReducer;
