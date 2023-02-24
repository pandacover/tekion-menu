const makePaymentAPI = (cartItems) => {
    new Promise((resolve, reject) => {
        try {
            if(cartItems.length <= 0) throw new Error('Cart is empty!')
            localStorage.setItem("purchased-item", JSON.stringify(cartItems));
            resolve("Purchase Complete");
        } catch (error) {
            reject(error)
        }
    }).then((res) => console.log(res), err => {throw err}).catch(err => console.error(err.message))
}

export default makePaymentAPI;
