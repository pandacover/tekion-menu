import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { RxCaretLeft, RxCaretRight } from "react-icons/rx";
import PropTypes from "prop-types";

import ButtonLink from "../button-link/ButtonLink";
import PayModal from "../pay-modal/PayModal";
import Loader from "../loader/Loader";

import { makePaymentAPI } from "../../api";
import { calculatePrice } from "./helpers";

import global from "../../config";

const CartUtility = ({ setError, cart, resetCart }) => {
  const [isPurchase, setIsPurchase] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const totalCost = useMemo(() => calculatePrice(cart), [cart]);

  const onMakePayment = async (e) => {
    try {
      setIsLoading(true);
      setIsPurchase(!(await makePaymentAPI(cart)));
      setError(undefined);
      resetCart();
      localStorage.removeItem("cart");
      navigate("/order-summary");
    } catch (error) {
      setError(error.message);
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const onMakePurchase = (e) => {
    e.preventDefault();
    setIsPurchase(!isPurchase);
  };

  const RenderPayLink = (classname, path, onClick, isPayButton) => {
    if (isPayButton && cart.length <= 0) return;
    return (
      <ButtonLink classname={classname} path={path} onClick={onClick}>
        <RxCaretRight />
        Continue shopping
      </ButtonLink>
    );
  };

  return (
    <div className="cart__utility">
      <ButtonLink classname="goto__home" path="/">
        <RxCaretLeft />
        Make purchase
      </ButtonLink>
      {RenderPayLink("goto__pay", "#", onMakePurchase, true)}
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
  resetCart: global.noop,
  cart: [],
};

CartUtility.propTypes = {
  setError: PropTypes.func,
  resetCart: PropTypes.func,
  cart: PropTypes.array,
};

export default CartUtility;
