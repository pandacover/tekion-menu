import { Link } from "react-router-dom";

import global from "../../config";
import PropTypes from "prop-types";
import { useCartContext } from "../../contexts/cart.context";

const ButtonLink = ({ children, classname, path, onClick }) => {
  const { cartItems } = useCartContext();
  if (classname === "cart-goto-pay" && cartItems.length <= 0) return;
  return (
    <Link className={classname} to={path} onClick={onClick}>
      {children}
    </Link>
  );
};

ButtonLink.defaultProps = {
  onClick: global.noop,
};

ButtonLink.propTypes = {
  children: PropTypes.node,
  classname: PropTypes.string,
  path: PropTypes.string,
  onClick: PropTypes.func,
};

export default ButtonLink;
