import { CART } from "../config";

const getCartFromLocalStorage = () => {
  try {
    const cartFromLocalStorage = localStorage.getItem(CART);
    if (!cartFromLocalStorage) return [];
    return JSON.parse(cartFromLocalStorage);
  } catch (error) {
    console.error(error);
    return [];
  }
};

export default getCartFromLocalStorage;
