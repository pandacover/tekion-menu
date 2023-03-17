const menuActions = {
  UPDATE_MENU: "UPDATE_MENU",
};

export const updateMenu = (payload) => ({
  type: menuActions.UPDATE_MENU,
  payload: { nextState: payload },
});

export default Object.freeze(menuActions);
