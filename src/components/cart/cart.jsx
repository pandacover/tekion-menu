import { useMemo } from "react";
import PropTypes from "prop-types";

import TableRow from "./TableRow";
import CartEmpty from "./cart-empty/CartEmpty";
import { calculatePrice } from "./helpers";
import { calculateQuantity } from "../helpers";

const Cart = ({ cart }) => {
  const totalItems = useMemo(() => calculateQuantity(cart), [cart]);
  const totalCost = useMemo(() => calculatePrice(cart), [cart]);

  if (cart.length <= 0) return <CartEmpty />;

  return (
    <>
      <ul className="cart cart__container">
        <TableRow
          classname="cart__header"
          name="Item"
          count="Quantity"
          price="Price"
        />
        {cart.map(({ id, name, price, quantity }) => (
          <TableRow key={id} name={name} count={quantity} price={price} />
        ))}
      </ul>
      <ul className="cart">
        <TableRow
          classname="cart__footer"
          name="Total"
          count={totalItems}
          price={totalCost}
        />
      </ul>
    </>
  );
};

Cart.defaultProps = {
  cart: [],
};

Cart.propTypes = {
  cart: PropTypes.array,
};

export default Cart;
