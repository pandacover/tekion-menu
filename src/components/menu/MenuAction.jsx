import { useCallback, useEffect, useMemo } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import AddButton from "./actions/AddButton";
import EditButton from "./actions/EditButton";
import { findElement } from "./helpers";

import { selectCart } from "../../pages/cart-page/cart-redux/cart.selectors";
import { selectMenu } from "../../pages/menu-page/menu-redux/menu.selectors";
import {
  addItem,
  removeItem,
} from "../../pages/cart-page/cart-redux/cart.creators";

import global from "../../config";

const MenuAction = ({
  cart,
  menu,
  id,
  addItemDispatched,
  removeItemDispatched,
}) => {
  const item = useMemo(() => findElement(menu, id), [menu, id]);
  const cartItem = useMemo(() => findElement(cart, id), [cart, id]);
  const quantity = useMemo(
    () => (cartItem ? cartItem.quantity : 0),
    [cartItem]
  );

  const onAdd = useCallback(() => {
    addItemDispatched(item);
  }, [addItemDispatched, item]);

  const onRemove = useCallback(() => {
    removeItemDispatched(item);
  }, [removeItemDispatched, item]);

  useEffect(() => {
    try {
      localStorage.setItem("cart", JSON.stringify(cart));
    } catch (error) {
      console.error(error);
    }
  }, [cart]);

  if (!cartItem) return <AddButton onAdd={onAdd} />;

  return <EditButton dispatch={{ onAdd, onRemove }} quantity={quantity} />;
};

MenuAction.defaultProps = {
  cart: [],
  menu: [],
  addItemDispatched: global.noop,
  removeItemDispatched: global.noop,
};

MenuAction.propTypes = {
  cart: PropTypes.array,
  menu: PropTypes.array,
  id: PropTypes.string,
  addItemDispatched: PropTypes.func,
  removeItemDispatched: PropTypes.func,
};

const mapStateToProps = (state) => {
  return { cart: selectCart(state), menu: selectMenu(state) };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addItemDispatched: (item) => dispatch(addItem(item)),
    removeItemDispatched: (item) => dispatch(removeItem(item)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MenuAction);
