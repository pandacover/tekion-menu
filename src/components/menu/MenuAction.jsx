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
} from "../../pages/cart-page/cart-redux/cart.actions";

import { CART, noop } from "../../config";

const MenuAction = ({ menu, cart, id, addItemAction, removeItemAction }) => {
  const item = useMemo(() => findElement(menu, id), [menu, id]);
  const cartItem = useMemo(() => findElement(cart, id), [cart, id]);
  const quantity = useMemo(
    () => (cartItem ? cartItem.quantity ?? 0 : 0),
    [cartItem]
  );

  const onAdd = useCallback(() => {
    addItemAction(item);
  }, [addItemAction, item]);

  const onRemove = useCallback(() => {
    removeItemAction(item);
  }, [removeItemAction, item]);

  useEffect(() => {
    try {
      localStorage.setItem(CART, JSON.stringify(cart));
    } catch (error) {
      console.error(error);
    }
  }, [cart]);

  if (!cartItem) return <AddButton onAdd={onAdd} />;

  return <EditButton onAdd={onAdd} onRemove={onRemove} quantity={quantity} />;
};

MenuAction.defaultProps = {
  cart: [],
  menu: [],
  addItemAction: noop,
  removeItemAction: noop,
};

MenuAction.propTypes = {
  cart: PropTypes.array,
  menu: PropTypes.array,
  id: PropTypes.string,
  addItemAction: PropTypes.func,
  removeItemAction: PropTypes.func,
};

const mapStateToProps = (state) => {
  const menu = selectMenu(state);
  const cart = selectCart(state);
  return { menu, cart };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addItemAction: (item) => dispatch(addItem(item)),
    removeItemAction: (item) => dispatch(removeItem(item)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MenuAction);
