import PropTypes from "prop-types";
import global from "../../../config";

const EditButton = ({ quantity = 0, editQuantity, onInputQuant }) => {
  const selectInputOnClick = (e) => {
    e.target.select();
  };

  return (
    <div className="item-action-add">
      <button id="action-add" className="action-btn" onClick={editQuantity}>
        +
      </button>
      <input
        type="number"
        name=""
        id=""
        value={quantity}
        onKeyDown={editQuantity}
        onChange={onInputQuant}
        onClick={selectInputOnClick}
      />
      <button id="action-sub" className="action-btn" onClick={editQuantity}>
        -
      </button>
    </div>
  );
};

EditButton.defaultProps = {
  editQuantity: global.noop,
};

EditButton.propTypes = {
  quantity: PropTypes.number,
  editQuantity: PropTypes.func,
  onInputQuant: PropTypes.func,
};

export default EditButton;
