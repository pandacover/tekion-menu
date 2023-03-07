import PropTypes from "prop-types";

const TableRow = ({ tabelRowContainerStyles, name, count, price }) => {
  const tableRowContainerClassNames = "cart__item " + tabelRowContainerStyles;

  return (
    <li className={tableRowContainerClassNames}>
      <div className="cart__item__name">{name}</div>
      <div className="cart__item__count">{count}</div>
      <div className="cart__item__price">{price}</div>
    </li>
  );
};

TableRow.propTypes = {
  tabelRowContainerClasses: PropTypes.string,
  name: PropTypes.string,
  count: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default TableRow;
