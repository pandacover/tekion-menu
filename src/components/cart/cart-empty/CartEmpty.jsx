import { TbShoppingCartX as CartX } from "react-icons/tb";

import "./cart-empty.css";

const CartEmpty = () => {
  return (
    <div className="cart-container cart-inner-container empty-cart-container">
      <div className="empty-cart-icon">
        <CartX />
      </div>
      <div className="empty-cart-text">Cart is empty!</div>
    </div>
  );
};

export default CartEmpty;
