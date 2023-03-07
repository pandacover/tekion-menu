import { useMemo, useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { CartUtility, Cart } from "../../components";
import { reset } from "./cart-redux/cart.creators";
import { selectCart } from "./cart-redux/cart.selectors";
import global from "../../config";

import "../../styles/cart.css";

const CartPage = ({ reset, cart }) => {
  const [error, setError] = useState(undefined);
  const classnames = (error ? "show " : "") + "payment__error";
  const isCartNotEmpty = useMemo(() => cart.length > 0, [cart]);
  const isError = error && true;

  const RenderCleanCart = () => {
    return (
      isCartNotEmpty && (
        <button
          className="default__button cart__action__reset"
          onClick={resetCartItems}
        >
          Clean Cart
        </button>
      )
    );
  };

  const resetCartItems = () => {
    reset();
    try {
      localStorage.removeItem("cart");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className={classnames} data-error={isError}>
        {isError && error}
      </div>
      <div className="cart">
        <div className="cart__header">
          <h3>Cart</h3>
          <div className="cart__action">{RenderCleanCart()}</div>
        </div>
        <Cart cart={cart} />
        <CartUtility setError={setError} cart={cart} />
      </div>
    </>
  );
};

CartPage.defaultProps = {
  reset: global.noop,
  cart: [],
};

CartPage.propTypes = {
  reset: PropTypes.func,
  cart: PropTypes.array,
};

const mapStateToProps = (state) => {
  return { cart: selectCart(state) };
};

const mapDispatchToProps = (dispatch) => {
  return {
    reset: () => dispatch(reset()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartPage);
