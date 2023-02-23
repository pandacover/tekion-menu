import { useCartContext } from "../../contexts/cart.context";
import "../../styles/cart.css";

const Cart = () => {
  const { cartItems } = useCartContext();
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
          <div className="cart-item--name">
            Total
          </div>
          <div className="cart-item--count">
            {cartItems.reduce((acc, item) => acc + item.count, 0)}
          </div>
          <div className="cart-item--price">
            ${cartItems.reduce((acc, item) => acc + item.price * item.count, 0)}
          </div>
        </li>
      </ul>
    </>
  );
};

export default Cart;
