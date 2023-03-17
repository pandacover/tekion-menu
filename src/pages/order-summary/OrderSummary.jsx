import { useState, useEffect } from "react";
import { RxCaretLeft } from "react-icons/rx";
import { useNavigate } from "react-router-dom";
import { Cart } from "../../components";
import ButtonLink from "../../components/button-link/ButtonLink";
import "./orderSummary.css";

const OrderSummary = () => {
  const [order, setOrder] = useState(null);
  const navigate = useNavigate();

  const getOrderFromLocalStorage = () => {
    const orderFromLocalStorage = localStorage.getItem("purchased-item");
    if (!orderFromLocalStorage) throw new Error("No order found!");
    return orderFromLocalStorage;
  };

  useEffect(() => {
    try {
      const orderFromLocalStorage = getOrderFromLocalStorage();
      const parsedOrderFromLocalStorage = JSON.parse(orderFromLocalStorage);
      setOrder(parsedOrderFromLocalStorage);
    } catch (error) {
      console.error(error.message);
      navigate("/");
    }
  }, [navigate]);

  return (
    <div className="order__summary">
      <div className="order__summary__header">
        <h2>Thank you for shopping with us!</h2>
      </div>
      {order && <Cart cart={order} />}
      <div className="order__summary__footer">
        <ButtonLink buttonLinkStyles="goto__home" path="/">
          <RxCaretLeft />
          Continue Shopping
        </ButtonLink>
      </div>
    </div>
  );
};

export default OrderSummary;
