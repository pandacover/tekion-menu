import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "../pages/menu-page/menu-redux/menu.reducers";
import cartReducer from "../pages/cart-page/cart-redux/cart.reducers";

const store = configureStore({
  reducer: {
    menu: menuReducer,
    cart: cartReducer,
  },
});

export default store;
