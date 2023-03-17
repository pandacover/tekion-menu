import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { RiShoppingCartLine as IconCart } from "react-icons/ri";

import "./cart-icon.css";

const CartIcon = ({ totalCartSize }) => {
  const isTotalCountVisible = totalCartSize > 0;

  return (
    <Link to="/cart" className="cart-icon-container">
      <div className="cart-icon">
        <IconCart />
      </div>
      {isTotalCountVisible && (
        <div className="cart-quantity">{totalCartSize}</div>
      )}
    </Link>
  );
};

CartIcon.propTypes = {
  totalCartSize: PropTypes.number,
};

export default CartIcon;
