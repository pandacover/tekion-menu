import menuActions from "./menu.actions";

export const updateMenu = (payload) => ({
  type: menuActions.UPDATE_MENU,
  payload: { nextState: payload },
});
