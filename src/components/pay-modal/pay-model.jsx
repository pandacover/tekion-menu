import "../../styles/paymodal.css";
import Loader from "../loader/loader";

const PayModal = ({ totalCost, onMakePayment, onMakePurchase, loading }) => {
    return (
        <div className="paymodal-container">
            <div className="paymodal-msg">Make a payment of <strong>${totalCost}</strong></div>
            <div className="paymodal-action">
                <button className="default-button paymodal-action--confirm" onClick={onMakePayment} disabled={loading}>{loading ? <Loader /> : "Confirm"}</button>
                <button className="default-button paymodal-action--cancel" onClick={onMakePurchase}>Cancel</button>
            </div>
        </div>
    )
}

export default PayModal;
