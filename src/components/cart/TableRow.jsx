import PropTypes from "prop-types";

const TableRow = ({ classname, name, count, price }) => {
  const PRICE = (typeof price === "number" ? "$" : "") + price;
  const className = "cart__item " + classname;
  return (
    <li className={className}>
      <div className="cart__item__name">{name}</div>
      <div className="cart__item__count">{count}</div>
      <div className="cart__item__price">{PRICE}</div>
    </li>
  );
};

TableRow.propTypes = {
  classname: PropTypes.string,
  name: PropTypes.string,
  count: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default TableRow;
