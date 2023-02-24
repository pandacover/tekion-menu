import { useCartContext } from "../../contexts/cart.context";
import "../../styles/cart.css";
import { useMemo } from "react";

const Cart = () => {
  const { cartItems } = useCartContext();
  const totalItems = useMemo(
    () => cartItems.reduce((acc, item) => acc + item.count, 0),
    [cartItems]
  );
  const totalCost = useMemo(
    () => cartItems.reduce((acc, item) => acc + item.count * item.price, 0),
    [cartItems]
  );
  
  if (cartItems.length <= 0) return <div style={{ marginTop: "10px" }}>Cart is empty</div>;

  return (
    <>
      <ul className="cart-container">
        <li className="cart-item cart-header">
          <div className="cart-item--name">Item</div>
          <div className="cart-item--count">Quantity</div>
          <div className="cart-item--price">Price</div>
        </li>
        {cartItems.map(({ id, name, price, count }) => (
          <li className="cart-item" key={id}>
            <div className="cart-item--name">{name}</div>
            <div className="cart-item--count">{count}</div>
            <div className="cart-item--price">${price}</div>
          </li>
        ))}
      </ul>
      <ul className="cart-container">
        <li className="cart-item cart-footer">
          <div className="cart-item--name">Total</div>
          <div className="cart-item--count">{totalItems}</div>
          <div className="cart-item--price">${totalCost}</div>
        </li>
      </ul>
    </>
  );
};

export default Cart;
