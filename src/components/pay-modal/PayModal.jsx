import PropTypes from "prop-types";

import "./PayModal.css";
import global from "../../config";

const PayModal = ({
  totalCost,
  onMakePayment,
  onMakePurchase,
  isPurchase,
}) => {
  if (!isPurchase) return;
  return (
    <div className="paymodal-container">
      <div className="paymodal-msg">
        Make a payment of <strong>${totalCost}</strong>
      </div>
      <div className="paymodal-action">
        <button
          className="default-button paymodal-action--confirm"
          onClick={onMakePayment}
        >
          "Confirm"
        </button>
        <button
          className="default-button paymodal-action--cancel"
          onClick={onMakePurchase}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

PayModal.defaultProps = {
  onMakePayment: global.noop,
  onMakePurchase: global.noop
}

PayModal.propTypes = {
  totalCost: PropTypes.number,
  onMakePayment: PropTypes.func,
  onMakePurchase: PropTypes.func,
  isPurchase: PropTypes.bool,
};

export default PayModal;
