import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { HomePage, CartPage } from './pages';
import { MenuContext } from "./contexts/menu.context";
import { CartContext } from "./contexts/cart.context";
import MockData from "./mock-data";

const App = () => {
    const [cartItems, setCartItems] = useState([]);
    return (
        <MenuContext.Provider value={{ menuData: MockData }}>
            <CartContext.Provider value={{ cartItems, setCartItems }}>
           <div className="container">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path = "/cart" element={<CartPage />} />
                </Routes>
            </div>
            </CartContext.Provider>
        </MenuContext.Provider>
    )
}

export default App;