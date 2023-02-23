import { useEffect, useState } from "react";
import { useMenuContext } from "../../contexts/menu.context";
import MenuAction from "./menu-action";
import "../../styles/menu.css";
// import LazyImg from "../lazy-image/lazyimg";
import IconCart from "./cart-icon/cart-icon";


const Menu = () => {
  const { menuData } = useMenuContext();
  const [filter, setFilter] = useState("ALL");
  const [menuDataState, setMenuDataState] = useState([]);

  useEffect(() => {
    if(filter === "ALL") document.querySelector("#all").checked = true;
    if(filter !== "ALL") setMenuDataState(menuData.filter(item => item.type === filter));
    else setMenuDataState(menuData);
  }, [filter, menuData])

  return (
    <>
    <div className="filter-container">
      <div className="filter-label">Filter</div>
      <div className="filter">
        <label htmlFor="all">
          <input type="radio" name="filter" id="all" onChange={() => setFilter("ALL")} />
          <span>All</span>
        </label>
        <label htmlFor="veg">
        <input type="radio" name="filter" id="veg" onChange={() => setFilter("VEG")} />
        <span>Veg</span>
        </label>
        <label htmlFor="non-veg">
        <input type="radio" name="filter" id="non-veg" onChange={() => setFilter("NON VEG")} />
        <span>Non Veg</span>
        </label>
      </div>
        <IconCart />
    </div>
    <ul className="menu-list">
      {menuDataState.map(({ id, name, type, image, price, rate }) => (
        <li key={id} className="menu-list-item card">
          <div className="item-image">
            {/* <LazyImg image={image} /> */}
            {/* <img src={image} alt="No preview" /> */}
          </div>
          <div className="item-header">
            <div className={`item-type ${type}`} />
            <div>{name}</div>
          </div>
          <div className="item-info">
            <div>${price}</div>
            <div>
              <span>{rate}</span>/5
            </div>
          </div>
          <MenuAction id={id} />
        </li>
      ))}
    </ul>
    </>
  );
};

export default Menu;
