import PropTypes from "prop-types";

const EditButton = ({ quantity, editQuantity }) => {
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
            onChange={editQuantity}
          />
          <button id="action-sub" className="action-btn" onClick={editQuantity}>
            -
          </button>
        </div>
    )
}

EditButton.propTypes = {
    quantity: PropTypes.number,
    editQuantity: function(){},
}

export default EditButton;