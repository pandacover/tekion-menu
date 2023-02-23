import { Link } from "react-router-dom";
import { useCartContext } from "../../../contexts/cart.context"
import { RiShoppingCartLine as IconCart } from "react-icons/ri"
import "../../../styles/cart-icon.css";

const CartIcon = () => {
    const { cartItems } = useCartContext();
    return (
        <Link to="/cart" className="cart-icon-container">
            <div className="cart-icon"><IconCart /></div>
            {cartItems.length > 0 && <div className="cart-quantity">{cartItems.reduce((a, b) => a + b.count, 0)}</div>}
        </Link>
    )
}

export default CartIcon;