import { useCallback, useEffect, useMemo, useState } from "react";

import PropTypes from "prop-types";

import AddButton from "./actions/AddButton";
import EditButton from "./actions/EditButton";

import { useCartContext } from "../../contexts/cart.context";
import { useMenuContext } from "../../contexts/menu.context";
import updateArray from "../../lib/updateArray";

const MenuAction = ({ id }) => {
  const { cartItems, setCartItems } = useCartContext();
  const { menuData } = useMenuContext();
  const [inputQuant, setInputQuant] = useState(0);

  const checkEqual = useCallback((el) => el.id === id, [id]);

  const cartItem = useMemo(
    () => cartItems.find(checkEqual),
    [cartItems, checkEqual]
  );

  const updateCartLocalStorage = useCallback(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems])

  useEffect(() => {
    setInputQuant(cartItem ? cartItem.count : 0);
    updateCartLocalStorage();
  }, [cartItem, updateCartLocalStorage]);

  const onAdd = useCallback(
    (e) => {
      setCartItems((prevItems) =>
       updateArray(prevItems, menuData.find(checkEqual), 1)
      );
    },
    [menuData, checkEqual]
  );

  const editQuantity = useCallback(
    (e) => {
      const target = e.target;
      if (target.id === "action-add") {
        setCartItems((prevItems) =>
          updateArray(prevItems, menuData.find(checkEqual), 1)
        );
      } else if (target.id === "action-sub" && cartItems.length > 0) {
        setCartItems((prevItems) =>
          updateArray(prevItems, menuData.find(checkEqual), -1)
        );
      } else {
        if (e.key === "Enter") {
          setCartItems((prevItems) =>
            updateArray(
              prevItems,
              menuData.find(checkEqual),
              !target.value ? 0 : parseInt(target.value)
            )
          );
        }
      }
    },
    [cartItems.length, menuData, checkEqual]
  );

  const onInputQuant = (e) => {
    setInputQuant(e.target.value ? parseInt(e.target.value) : 0);
  };

  if (!cartItem || cartItem.length === 0) return <AddButton onAdd={onAdd} />;

  return (
    <EditButton
      quantity={inputQuant}
      editQuantity={editQuantity}
      onInputQuant={onInputQuant}
    />
  );
};

MenuAction.propTypes = {
  id: PropTypes.string,
};

export default MenuAction;
