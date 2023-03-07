import { useState } from "react";

import { RxCaretLeft, RxCaretRight } from "react-icons/rx";
import PropTypes from "prop-types";

import ButtonLink from "./ButtonLink";
import PayModal from "../pay-modal/PayModal";
import Loader from "../loader/Loader";

import { useCartContext } from "../../contexts/cart.context";
import { makePaymentAPI } from "../../api";
import { useTotalAmount } from "../../hooks";

import global from "../../config";

const CartUtility = ({ setSuccess, setError }) => {
  const { cartItems, setCartItems } = useCartContext();
  const [isPurchase, setIsPurchase] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const totalCost = useTotalAmount(cartItems);

  const onMakePayment = async (e) => {
    try {
      setIsLoading(true);
      setIsPurchase(!(await makePaymentAPI(cartItems)));
      setCartItems([]);
      setError(undefined)
      setSuccess("Thank you for shopping with us!")
      localStorage.removeItem("cart");
    } catch (error) {
      setSuccess(undefined);
      setError(error.message)
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const onMakePurchase = (e) => {
    e.preventDefault();
    setIsPurchase(!isPurchase);
  };

  return (
    <div className="cart-utility">
      <ButtonLink classname="cart-goto-home" path="/">
        <RxCaretLeft />
        Continue shopping
      </ButtonLink>
      <ButtonLink classname="cart-goto-pay" path="#" onClick={onMakePurchase}>
        <RxCaretRight />
        Make purchase
      </ButtonLink>
      <Loader isLoading={isLoading}>
        <PayModal
          totalCost={totalCost}
          onMakePayment={onMakePayment}
          onMakePurchase={onMakePurchase}
          isPurchase={isPurchase}
        />
      </Loader>
    </div>
  );
};

CartUtility.defaultProps = {
  setError: global.noop,
  setSuccess: global.noop
}

CartUtility.propTypes = {
  setError: PropTypes.func,
  setSuccess: PropTypes.func
};

export default CartUtility;
