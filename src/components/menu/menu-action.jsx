import AddButton from "./actions/add-button";
import EditButton from "./actions/edit-button";
import { useCartContext } from "../../contexts/cart.context";
import { useMenuContext } from "../../contexts/menu.context";
import { upsertArray, removeElement } from "../../lib/updateArray";
import PropTypes from "prop-types";
import { useMemo } from "react";

const MenuAction = ({ id }) => {
  const { cartItems, setCartItems } = useCartContext();
  const { menuData } = useMenuContext();

  const cartItem = useMemo(() => cartItems.find(item => item.id === id), [cartItems, id]);

  function onAdd(e) {
    setCartItems(upsertArray(cartItems, menuData.find(el => el.id === id)));
  }

  function editQuantity(e) {
    if (e.target.id === "action-add") {
      setCartItems(upsertArray(cartItems, menuData.find(el => el.id === id)));
    } else if (e.target.id === "action-sub" && cartItems.length > 0) {
      setCartItems(removeElement(cartItems, menuData.find(el => el.id === id)));
    } else {
      if(e.target.value)
        setCartItems(upsertArray(cartItems, menuData.find(el => el.id === id), e.target.value));
    }
  }
  return (
    <>
      {!cartItem ? <AddButton onAdd={onAdd} id={id} /> : <EditButton quantity={cartItem ? cartItem.count : 0} editQuantity={editQuantity} />}
    </>
  );
};


MenuAction.propTypes = {
  id: PropTypes.string
}

export default MenuAction;