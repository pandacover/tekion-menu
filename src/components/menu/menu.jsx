import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import Card from "./Card";
import Filter from "./Filter";
import FilterEnum from "./FilterEnum";
import Loader from "../loader/Loader";
import CartIcon from "./cart-icon/CartIcon";

import global from "../../config";
import { dataAPI } from "../../api";
import { updateMenu } from "../../pages/menu-page/menu-redux/menu.creators";
import { selectMenu } from "../../pages/menu-page/menu-redux/menu.selectors";
import { selectCart } from "../../pages/cart-page/cart-redux/cart.selectors";
import { initCartFromLocalStorage } from "../../pages/cart-page/cart-redux/cart.creators";

import "./menu.css";
import { calculateQuantity } from "../helpers";

const Menu = ({
  menu: menuData,
  updateMenuDispatched,
  initCartFromLocalStorage,
  cart,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [filter, setFilter] = useState(FilterEnum.ALL);
  const [menuDataState, setMenuDataState] = useState([]);

  const filterAllRef = useRef(null);

  const totalCartSize = useMemo(() => calculateQuantity(cart), [cart]);

  const RenderCards = useCallback((item) => {
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
        updateMenuDispatched(response);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };
    getMenuData();
  }, [updateMenuDispatched]);

  useEffect(() => {
    if (filter === FilterEnum.ALL) filterAllRef.current.checked = true; // not working
    if (filter !== FilterEnum.ALL)
      setMenuDataState(menuData.filter(checkEqual));
    else setMenuDataState(menuData);
  }, [filter, menuData, checkEqual]);

  useEffect(() => {
    initCartFromLocalStorage();
  }, [initCartFromLocalStorage]);

  return (
    <Loader isLoading={isLoading}>
      <div className="filter">
        <div className="filter__label">Filter</div>
        <Filter
          triggerSetFilter={triggerSetFilter}
          filterAllRef={filterAllRef}
        />
        <CartIcon totalCartSize={totalCartSize} />
      </div>
      <ul className="menu">{menuDataState.map(RenderCards)}</ul>
    </Loader>
  );
};

Menu.defaultProps = {
  menu: [],
  cart: [],
  updateMenuDispatched: global.noop,
  initCartFromLocalStorage: global.noop,
};

Menu.propTypes = {
  menu: PropTypes.array,
  cart: PropTypes.array,
  updateMenuDispatched: PropTypes.func,
  initCartFromLocalStorage: PropTypes.func,
};

const mapStateToProps = (state) => {
  return { menu: selectMenu(state), cart: selectCart(state) };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateMenuDispatched: (nextState) => dispatch(updateMenu(nextState)),
    initCartFromLocalStorage: () => dispatch(initCartFromLocalStorage()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
