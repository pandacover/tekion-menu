import "../styles/cart.css";
import { CartUtility, Cart } from "../components";
import { useCartContext } from "../contexts/cart.context";
import { useState } from "react";

const CartPage = () => {
  const { setCartItems } = useCartContext();
  const [isPayment, setIsPayment] = useState(false);
  const [error, setError] = useState(undefined);
  const [success, setSuccess] = useState(undefined);

  const resetCartItems = () => {
    setCartItems([]);
    localStorage.removeItem("cart");
  };

  const classnames = `${(success || error) && "show"} payment-message`;
  const isSuccess = success && true;

  return (
    <>
      <div
        className={classnames}
        data-success={isSuccess}
        data-error={!isSuccess}
      >
        {success ? success : error}
      </div>
      <div className="cart-container">
        <div className="cart-container-head">
          <h3>Cart</h3>
          <div className="cart-container-action">
            <button
              className="default-button cart-action--delete-items"
              onClick={resetCartItems}
            >
              Clean Cart
            </button>
          </div>
        </div>
        <Cart isPayment={isPayment} />
        <CartUtility
          setIsPayment={setIsPayment}
          isPayment={isPayment}
          setError={setError}
          setSuccess={setSuccess}
        />
      </div>
    </>
  );
};

export default CartPage;
