import PropTypes from "prop-types";

const EditButton = ({ quantity = 0, editQuantity, onInputQuant }) => {
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
            onClick={(e) => e.target.select()}
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
    onInputQuant: function(){}
}

export default EditButton;