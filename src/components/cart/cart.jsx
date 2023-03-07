import { useCallback, useMemo } from "react";
import PropTypes from "prop-types";

import TableRow from "./TableRow";
import CartEmpty from "./cart-empty/CartEmpty";
import { calculatePrice } from "./helpers";
import { calculateQuantity } from "../helpers";

const Cart = ({ cart }) => {
  const totalItems = useMemo(() => calculateQuantity(cart), [cart]);
  const totalCost = useMemo(() => calculatePrice(cart), [cart]);

  const totalCostWithCurrency = "$" + totalCost;

  const renderTableData = useCallback(({ id, name, quantity, price }) => {
    const priceWithCurrency = "$" + price;

    return (
      <TableRow
        key={id}
        name={name}
        count={quantity}
        price={priceWithCurrency}
      />
    );
  }, []);

  if (cart.length <= 0) return <CartEmpty />;

  return (
    <>
      <ul className="cart cart__container">
        <TableRow
          tabelRowContainerStyles="cart__header"
          name="Item"
          count="Quantity"
          price="Price"
        />
        {cart.map(renderTableData)}
      </ul>
      <ul className="cart">
        <TableRow
          tabelRowContainerStyles="cart__footer"
          name="Total"
          count={totalItems}
          price={totalCostWithCurrency}
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
