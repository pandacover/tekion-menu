import { useMemo } from "react";

const useTotalAmount = (cartItems) => {
  const totalAmount = (acc, item) => {
    return acc + item.count * item.price;
  };

  return useMemo(() => cartItems.reduce(totalAmount, 0), [cartItems]);
};

export default useTotalAmount;
