import { memo } from "react";

import PropTypes from "prop-types";

import MenuAction from "./MenuAction";
import LazyImg from "../lazy-image/LazyImg";
import { areCardPropsEqual } from "./helpers";

const Card = memo(({ id, type, name, price, rate, image }) => {
  const cardTypeClassNames = "card__type " + type;

  return (
    <li key={id} className="card">
      <div className="card__image">
        <LazyImg image={image} />
      </div>
      <div className="card__header">
        <div className={cardTypeClassNames} />
        <div className="card__header__type">{name}</div>
      </div>
      <div className="card__info">
        <div className="card__info__price">${price}</div>
        <div className="card__info__rate">
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
