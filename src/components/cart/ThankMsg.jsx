import PropTypes from "prop-types";

const ThankMsg = ({ isPurchase }) => {
    if(isPurchase) return;
    return (
        <h2>Thank you for shopping with us!</h2>
    )
}

ThankMsg.propTypes = {
    isPurchase: PropTypes.bool
}

export default ThankMsg;
