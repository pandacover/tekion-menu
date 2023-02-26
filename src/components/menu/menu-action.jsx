import AddButton from "./actions/add-button";
import EditButton from "./actions/edit-button";
import { useCartContext } from "../../contexts/cart.context";
import { useMenuContext } from "../../contexts/menu.context";
import { upsertArray, removeElement } from "../../lib/updateArray";
import PropTypes from "prop-types";
import { useEffect, useMemo, useState } from "react";

const MenuAction = ({ id }) => {
  const { cartItems, setCartItems } = useCartContext();
  const { menuData } = useMenuContext();
  const [inputQuant, setInputQuant] = useState(0)

  const cartItem = useMemo(
    () => cartItems.find((item) => item.id === id),
    [cartItems, id]
  );

  useEffect(() => {
    setInputQuant(cartItem ? cartItem.count : 0);
  }, [cartItem])

  function onAdd(e) {
    setCartItems(
      upsertArray(
        cartItems,
        menuData.find((el) => el.id === id)
      )
    );
  }

  function editQuantity(e) {
    if (e.target.id === "action-add") {
      setCartItems(
        upsertArray(
          cartItems,
          menuData.find((el) => el.id === id)
        )
      );
    } else if (e.target.id === "action-sub" && cartItems.length > 0) {
      setCartItems(
        removeElement(
          cartItems,
          menuData.find((el) => el.id === id)
        )
      );
    } else {
      if (e.key === "Enter") {
        setCartItems(
          upsertArray(
            cartItems,
            menuData.find((el) => el.id === id),
            !e.target.value ? 0 : parseInt(e.target.value)
          )
        );
          }
    }
  }

  function onInputQuant(e) {
    setInputQuant(e.target.value ? parseInt(e.target.value) : 0);
  }
  return (
    <>
      {!cartItem ? (
        <AddButton onAdd={onAdd} id={id} />
      ) : (
        <EditButton
          quantity={inputQuant}
          editQuantity={editQuantity}
          onInputQuant={onInputQuant}
        />
      )}
    </>
  );
};

MenuAction.propTypes = {
  id: PropTypes.string,
};

export default MenuAction;
