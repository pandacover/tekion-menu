import PropTypes from "prop-types";
import global from "../../../config";

const AddButton = ({ onAdd }) => {
  return (
    <div className="item-button-wrapper">
      <button onClick={onAdd} className="item-button">
        Add
      </button>
    </div>
  );
};

AddButton.defaultProps = {
  onAdd: global.noop
}

AddButton.propTypes = {
  onAdd: PropTypes.func,
};

export default AddButton;
