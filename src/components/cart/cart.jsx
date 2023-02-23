import { useMemo } from "react";

import TableRow from "./TableRow";
import CartEmpty from "./cart-empty/CartEmpty";

import { useCartContext } from "../../contexts/cart.context";

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

  if (cartItems.length <= 0) return <CartEmpty />;

  return (
    <>
      <ul className="cart-container cart-inner-container">
        <TableRow
          classname="cart-header"
          name="Item"
          count="Quantity"
          price="Price"
        />
        {cartItems.map(({ id, name, price, count }) => (
          <TableRow key={id} name={name} count={count} price={price} />
        ))}
      </ul>
      <ul className="cart-container">
        <TableRow
          classname="cart-footer"
          name="Total"
          count={totalItems}
          price={totalCost}
        />
      </ul>
    </>
  );
};

export default Cart;
