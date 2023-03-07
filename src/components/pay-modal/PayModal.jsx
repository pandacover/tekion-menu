import PropTypes from "prop-types";

import "./PayModal.css";
import global from "../../config";

const PayModal = ({ totalCost, onMakePayment, onMakePurchase, isPurchase }) => {
  if (!isPurchase) return;

  return (
    <div className="paymodal">
      <div className="paymodal__message">
        Make a payment of <strong>${totalCost}</strong>
      </div>
      <div className="paymodal-action paymodal__action">
        <button
          className="default__button paymodal__action__confirm"
          onClick={onMakePayment}
        >
          Confirm
        </button>
        <button
          className="default__button paymodal__action__cancel"
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
  onMakePurchase: global.noop,
};

PayModal.propTypes = {
  totalCost: PropTypes.number,
  onMakePayment: PropTypes.func,
  onMakePurchase: PropTypes.func,
  isPurchase: PropTypes.bool,
};

export default PayModal;
