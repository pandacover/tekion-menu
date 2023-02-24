import { Link } from "react-router-dom";
import { RxCaretLeft, RxCaretRight } from "react-icons/rx";
import { useCartContext } from "../../contexts/cart.context";
import { makePaymentAPI } from "../../api";
import PayModal from "../pay-modal/pay-model";
import { useMemo, useState } from "react";

const CartUtility = () => {
  const { cartItems } = useCartContext();
  const [isPurchase, setIsPurchase] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const totalCost = useMemo(() => cartItems.reduce((acc, item) => acc + item.count * item.price, 0), [cartItems]);

  const onMakePayment = (e) => {
    setIsLoading(true);
      makePaymentAPI(cartItems);
      setIsPurchase(false);
    setIsLoading(false);
  };

  const onMakePurchase = (e) => {
    e.preventDefault();
    setIsPurchase(!isPurchase);
  };

  return (
    <>
      <div className="cart-utility">
        <Link className="cart-goto-home" to="/">
          <RxCaretLeft />
          Continue shopping
        </Link>
        <Link
          to="#"
          className="cart-goto-pay"
          onClick={onMakePurchase}
        >
          Make purchase
          <RxCaretRight />
        </Link>
      </div>
      { isPurchase && 
      <PayModal
        totalCost={totalCost}
        onMakePayment={onMakePayment}
        onMakePurchase={onMakePurchase}
        loading={isLoading}
      />
        }
    </>
  );
};

export default CartUtility;
