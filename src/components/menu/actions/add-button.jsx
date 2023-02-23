import PropTypes from "prop-types";

const AddButton = ({ onAdd }) => {
    return (
        <div className="item-button-wrapper">
          <button onClick={onAdd} className="item-button">
            Add
          </button>
        </div>
    )
}

AddButton.propTypes = {
  onAdd: function(){},
  id: PropTypes.string
}

export default AddButton;
