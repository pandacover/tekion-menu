import { Link } from "react-router-dom";
import { RiShoppingCartLine as IconCart } from "react-icons/ri";

import { useCartContext } from "../../../contexts/cart.context";
import { useTotalCount } from "../../../hooks";

import "./cart-icon.css";
import { useMemo } from "react";

const CartIcon = () => {
  const { cartItems } = useCartContext();
  const totalCount = useTotalCount(cartItems);
  const isTotalCountVisible = useMemo(() => totalCount > 0, [totalCount]);

  return (
    <Link to="/cart" className="cart-icon-container">
      <div className="cart-icon">
        <IconCart />
      </div>
      {isTotalCountVisible && <div className="cart-quantity">{totalCount}</div>}
    </Link>
  );
};

export default CartIcon;
