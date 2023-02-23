import { memo } from "react";

import PropTypes from "prop-types";

import MenuAction from "./MenuAction";
import LazyImg from "../lazy-image/LazyImg";
import areCardPropsEqual from "../../lib/areCardPropsEqual";

const Card = memo(({ id, type, name, price, rate, image }) => {
  return (
    <li key={id} className="menu-list-item card">
      <div className="item-image">
        <LazyImg image={image} />
      </div>
      <div className="item-header">
        <div className={`item-type ${type}`} />
        <div>{name}</div>
      </div>
      <div className="item-info">
        <div>${price}</div>
        <div>
          <span>{rate}</span>/5
        </div>
      </div>
      <MenuAction id={id} />
    </li>
  );
}, areCardPropsEqual);

Card.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.number,
  rate: PropTypes.number,
};

export default Card;
