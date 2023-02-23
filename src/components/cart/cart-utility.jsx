import { Link } from "react-router-dom";
import { RxCaretLeft, RxCaretRight } from "react-icons/rx";

const CartUtility = () => {
    return (
      <div className="cart-utility">
        <Link className="cart-goto-home" to="/">
            <RxCaretLeft />
          Continue shopping
        </Link>
        <Link className="cart-goto-pay" to="/pay">
          Make Purchase
            <RxCaretRight />
        </Link>
      </div>
    )
}

export default CartUtility;