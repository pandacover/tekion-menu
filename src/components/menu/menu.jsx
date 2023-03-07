import { useCallback, useEffect, useRef, useState } from "react";

import { useMenuContext } from "../../contexts/menu.context";

import IconCart from "./cart-icon/CartIcon";
import Card from "./Card";
import Filter from "./Filter";
import FilterEnum from "./FilterEnum";

import "./menu.css";

const Menu = () => {
  const { menuData } = useMenuContext();
  const [filter, setFilter] = useState(FilterEnum.ALL);
  const [menuDataState, setMenuDataState] = useState([]);
  const filterAllRef = useRef(null);

  const RenderCards = useCallback((item) => {
    return <Card {...item} key={item.id} />;
  }, []);

  const triggerSetFilter = (filterType = FilterEnum.ALL) => {
    setFilter(filterType);
  };

  const checkEqual = useCallback((item) => item.type === filter, [filter]);

  useEffect(() => {
    if (filter === FilterEnum.ALL) filterAllRef.current.checked = true;
    if (filter !== FilterEnum.ALL)
      setMenuDataState(menuData.filter(checkEqual));
    else setMenuDataState(menuData);
  }, [filter, menuData, checkEqual]);

  return (
    <>
      <div className="filter-container">
        <div className="filter-label">Filter</div>
        <Filter
          triggerSetFilter={triggerSetFilter}
          filterAllRef={filterAllRef}
        />
        <IconCart />
      </div>
      <ul className="menu-list">{menuDataState.map(RenderCards)}</ul>
    </>
  );
};

export default Menu;
