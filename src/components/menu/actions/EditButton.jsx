import PropTypes from "prop-types";
import global from "../../../config";

const EditButton = ({ dispatch: { onAdd, onRemove }, quantity }) => {
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
  dispatch: {
    onAdd: global.noop,
    onRemove: global.noop,
  },
};

EditButton.propTypes = {
  dispatch: PropTypes.shape({
    onAdd: PropTypes.func,
    onRemove: PropTypes.func,
  }),
  quantity: PropTypes.number,
};

export default EditButton;
