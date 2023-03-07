import { useCallback, useEffect, useMemo, useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import Card from "./Card";
import Filter from "./Filter";
import FilterEnum from "./FilterEnum";
import Loader from "../loader/Loader";
import CartIcon from "./cart-icon/CartIcon";

import { noop } from "../../config";
import { dataAPI } from "../../api";
import { updateMenu } from "../../pages/menu-page/menu-redux/menu.actions";
import { selectMenu } from "../../pages/menu-page/menu-redux/menu.selectors";
import { selectCart } from "../../pages/cart-page/cart-redux/cart.selectors";
import { initCartFromLocalStorage } from "../../pages/cart-page/cart-redux/cart.actions";
import { getCartFromLocalStorage } from "../../helpers";
import { calculateQuantity } from "../helpers";

import "./menu.css";

const Menu = ({
  menu,
  cart,
  updateMenuAction,
  initCartFromLocalStorageAction,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [filter, setFilter] = useState(FilterEnum.ALL);
  const [menuDataState, setMenuDataState] = useState([]);

  const totalCartSize = useMemo(() => calculateQuantity(cart), [cart]);

  const renderCards = useCallback((item) => {
    return <Card {...item} key={item.id} />;
  }, []);

  const triggerSetFilter = (filterType = FilterEnum.ALL) => {
    setFilter(filterType);
  };

  const checkEqual = useCallback((item) => item.type === filter, [filter]);

  useEffect(() => {
    const getMenuData = async () => {
      try {
        setIsLoading(true);
        const response = await dataAPI();
        updateMenuAction(response);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };
    getMenuData();
  }, [updateMenuAction]);

  useEffect(() => {
    if (filter !== FilterEnum.ALL) {
      setMenuDataState(menu.filter(checkEqual));
    } else {
      setMenuDataState(menu);
    }
  }, [filter, menu, checkEqual]);

  useEffect(() => {
    const cartFromLocalStorage = getCartFromLocalStorage();
    initCartFromLocalStorageAction(cartFromLocalStorage);
  }, [initCartFromLocalStorageAction]);

  return (
    <Loader isLoading={isLoading}>
      <div className="filter">
        <div className="filter__label">Filter</div>
        <Filter triggerSetFilter={triggerSetFilter} filter={filter} />
        <CartIcon totalCartSize={totalCartSize} />
      </div>
      <ul className="menu">{menuDataState.map(renderCards)}</ul>
    </Loader>
  );
};

Menu.defaultProps = {
  menu: [],
  cart: [],
  updateMenuAction: noop,
  initCartFromLocalStorage: noop,
};

Menu.propTypes = {
  menu: PropTypes.array,
  cart: PropTypes.array,
  updateMenuAction: PropTypes.func,
  initCartFromLocalStorage: PropTypes.func,
};

const mapStateToProps = (state) => {
  const menu = selectMenu(state);
  const cart = selectCart(state);
  return { menu, cart };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateMenuAction: (nextState) => dispatch(updateMenu(nextState)),
    initCartFromLocalStorageAction: (cartFromLocalStorage) =>
      dispatch(initCartFromLocalStorage(cartFromLocalStorage)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
