import { TbShoppingCartX as CartX } from "react-icons/tb";

import "./cart-empty.css";

const CartEmpty = () => {
  return (
    <div className="cart cart__container empty__cart">
      <div className="empty__cart__icon">
        <CartX />
      </div>
      <div className="empty__cart__text">Cart is empty!</div>
    </div>
  );
};

export default CartEmpty;
