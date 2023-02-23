import { useMemo } from "react";

const useTotalCount = (cartItems) => {
  const totalQuantityOfItems = (acc, item) => {
    return acc + item.count;
  };

  return useMemo(() => cartItems.reduce(totalQuantityOfItems, 0), [cartItems]);
};

export default useTotalCount;
