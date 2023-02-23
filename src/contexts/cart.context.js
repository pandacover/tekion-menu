import { createContext, useContext } from "react";

export const CartContext = createContext(null);

export const useCartContext = () => {
    const context = useContext(CartContext);
    if(!context) throw new Error("useCartContext is outside of CartContext scope.")
    return context;
}
