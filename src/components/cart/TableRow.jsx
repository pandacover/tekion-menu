import PropTypes from "prop-types";

const TableRow = ({ classname, name, count, price }) => {
  return (
    <li className={`cart-item ${classname}`}>
      <div className="cart-item--name">{name}</div>
      <div className="cart-item--count">{count}</div>
      <div className="cart-item--price">
        {typeof price === "number" ? `$${price}` : price}
      </div>
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
