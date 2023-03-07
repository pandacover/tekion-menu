import PropTypes from "prop-types";
import { noop } from "../../../config";

const EditButton = ({ onAdd, onRemove, quantity }) => {
  return (
    <div className="card__action__button card__action__edit">
      <button
        id="action-add"
        className="action__edit__add action__edit__item"
        onClick={onAdd}
      >
        +
      </button>
      <div className="action__button__quantity action__edit__item">
        {quantity}
      </div>
      <button
        id="action-sub"
        className="action__edit__delete action__edit__item"
        onClick={onRemove}
      >
        -
      </button>
    </div>
  );
};

EditButton.defaultProps = {
  onAdd: noop,
  onRemove: noop,
};

EditButton.propTypes = {
  onAdd: PropTypes.func,
  onRemove: PropTypes.func,
  quantity: PropTypes.number,
};

export default EditButton;
