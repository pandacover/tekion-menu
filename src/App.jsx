import { Routes, Route } from "react-router-dom";

import { MenuPage, CartPage, OrderSummary } from "./pages";

const App = () => {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<MenuPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/order-summary" element={<OrderSummary />} />
      </Routes>
    </div>
  );
};

export default App;
