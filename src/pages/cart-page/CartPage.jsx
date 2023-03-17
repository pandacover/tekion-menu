import { useEffect, useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { CartUtility, Cart } from "../../components";
import { reset, initCartFromLocalStorage } from "./cart-redux/cart.actions";
import { getCartFromLocalStorage } from "../../helpers";
import { selectCart } from "./cart-redux/cart.selectors";
import { CART, noop } from "../../config";

import "../../styles/cart.css";

const CartPage = ({ cart, reset, initCartFromLocalStorageAction }) => {
  const [error, setError] = useState(undefined);
  const classnames = (error ? "show " : "") + "payment__error";
  const isCartNotEmpty = cart.length > 0;
  const isError = error && true;

  const renderCleanCart = () => {
    if (!isCartNotEmpty) return;

    return (
      <button
        className="default__button cart__action__reset"
        onClick={resetCartItems}
      >
        Clean Cart
      </button>
    );
  };

  const resetCartItems = () => {
    reset();
    try {
      localStorage.removeItem(CART);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const cartFromLocalStorage = getCartFromLocalStorage();
    initCartFromLocalStorageAction(cartFromLocalStorage);
  }, [initCartFromLocalStorageAction]);

  return (
    <>
      <div className={classnames} data-error={isError}>
        {isError && error}
      </div>
      <div className="cart">
        <div className="cart__header">
          <h3>Cart</h3>
          <div className="cart__action">{renderCleanCart()}</div>
        </div>
        <Cart cart={cart} />
        <CartUtility setError={setError} cart={cart} />
      </div>
    </>
  );
};

CartPage.defaultProps = {
  cart: [],
  reset: noop,
  initCartFromLocalStorageAction: noop,
};

CartPage.propTypes = {
  reset: PropTypes.func,
  cart: PropTypes.array,
  initCartFromLocalStorageAction: PropTypes.func,
};

const mapStateToProps = (state) => {
  const cart = selectCart(state);
  return { cart };
};

const mapDispatchToProps = (dispatch) => {
  return {
    reset: () => dispatch(reset()),
    initCartFromLocalStorageAction: (cartFromLocalStorage) =>
      dispatch(initCartFromLocalStorage(cartFromLocalStorage)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartPage);
