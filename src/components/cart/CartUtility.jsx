import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { RxCaretLeft, RxCaretRight } from "react-icons/rx";
import PropTypes from "prop-types";

import ButtonLink from "../button-link/ButtonLink";
import PayModal from "../pay-modal/PayModal";
import Loader from "../loader/Loader";

import { makePaymentAPI } from "../../api";
import { calculatePrice } from "./helpers";

import { CART, noop } from "../../config";

const CartUtility = ({ setError, resetCart, cart }) => {
  const [isPurchase, setIsPurchase] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const totalCost = useMemo(() => calculatePrice(cart), [cart]);

  const onMakePayment = async (e) => {
    try {
      setIsLoading(true);
      const response = await makePaymentAPI(cart);
      setIsPurchase(!response);
      setError(undefined);
      resetCart();
      localStorage.removeItem(CART);
      navigate("/order-summary");
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const onMakePurchase = (e) => {
    e.preventDefault();
    setIsPurchase(!isPurchase);
  };

  const renderPayLink = (buttonLinkStyles, path, onClick, isPayButton) => {
    if (isPayButton && cart.length <= 0) return;

    return (
      <ButtonLink
        buttonLinkStyles={buttonLinkStyles}
        path={path}
        onClick={onClick}
      >
        <RxCaretRight />
        Continue shopping
      </ButtonLink>
    );
  };

  return (
    <div className="cart__utility">
      <ButtonLink buttonLinkStyles="goto__home" path="/">
        <RxCaretLeft />
        Make purchase
      </ButtonLink>
      {renderPayLink("goto__pay", "#", onMakePurchase, true)}
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
  setError: noop,
  resetCart: noop,
  cart: [],
};

CartUtility.propTypes = {
  setError: PropTypes.func,
  resetCart: PropTypes.func,
  cart: PropTypes.array,
};

export default CartUtility;
