import { createContext, useContext } from 'react';

export const MenuContext = createContext(null)

export const useMenuContext = () => {
    const context = useContext(MenuContext);
    if(!context) throw new Error("useMenuContext is outside of MenuContext scope.")
    return context;
}
