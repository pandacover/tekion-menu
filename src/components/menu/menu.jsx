import { useEffect, useState } from "react";
import { useMenuContext } from "../../contexts/menu.context";
import "../../styles/menu.css";
import IconCart from "./cart-icon";
import Card from "./card";
import Filter from "./filter";

const Menu = () => {
  const { menuData } = useMenuContext();
  const [filter, setFilter] = useState("ALL");
  const [menuDataState, setMenuDataState] = useState([]);

  useEffect(() => {
    if (filter === "ALL") document.querySelector("#all").checked = true;
    if (filter !== "ALL")
      setMenuDataState(menuData.filter((item) => item.type === filter));
    else setMenuDataState(menuData);
  }, [filter, menuData]);

  return (
    <>
      <div className="filter-container">
        <div className="filter-label">Filter</div>
        <Filter setFilter={setFilter} />
        <IconCart />
      </div>
      <ul className="menu-list">
        {menuDataState.map((item) => (
          <Card {...item} key={item.id} />
        ))}
      </ul>
    </>
  );
};

export default Menu;
