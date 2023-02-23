import "../styles/cart.css";
import { Cart } from "../components";
import CartUtility from "../components/cart/cart-utility";

const CartPage = () => {
  return (
    <div className="cart-container">
      <h3>Cart</h3>
      <Cart />
      <CartUtility />
    </div>
  );
};

export default CartPage;
