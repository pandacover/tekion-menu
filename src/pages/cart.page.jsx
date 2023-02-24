import "../styles/cart.css";
import { Cart } from "../components";
import CartUtility from "../components/cart/cart-utility";
import { useCartContext } from "../contexts/cart.context";

const CartPage = () => {
  const { setCartItems } = useCartContext();
  return (
    <div className="cart-container">
      <div className="cart-container-head">
        <h3>Cart</h3>
        <div className="cart-container-action">
          <button className="default-button cart-action--delete-items" onClick={() => setCartItems([])}>Clean Cart</button>
        </div>
      </div>
      <Cart />
      <CartUtility />
    </div>
  );
};

export default CartPage;
