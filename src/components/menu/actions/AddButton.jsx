import PropTypes from "prop-types";
import { noop } from "../../../config";

const AddButton = ({ onAdd }) => {
  return (
    <div className="card__action__button">
      <button onClick={onAdd} className="action__button__add">
        Add
      </button>
    </div>
  );
};

AddButton.defaultProps = {
  onAdd: noop,
};

AddButton.propTypes = {
  onAdd: PropTypes.func,
};

export default AddButton;
