const randomTrueOrFalse = () => {
    return (Math.ceil(Math.random() * 9 + 1) & 1) === 0;
}

const makePaymentAPI = (cartItems) => {
    return new Promise((resolve, reject) => {
        try {
            if(cartItems.length <= 0) throw new Error('Cart is empty!');
            else if(randomTrueOrFalse()) throw new Error('Error while purchasing!');
            localStorage.setItem("purchased-item", JSON.stringify(cartItems));
            return setTimeout(() => resolve(true), 3000);
        } catch (error) {
            return setTimeout(() => reject(error), 3000);
        }
    })
}

export default makePaymentAPI;
