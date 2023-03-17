import { noop } from "../../config";
import PropTypes from "prop-types";
import FilterEnum from "./FilterEnum";

const Filter = ({ triggerSetFilter, filter }) => {
  const isAllChecked = filter === FilterEnum.ALL;
  const isVegChecked = filter === FilterEnum.VEG;
  const isNonVegChecked = filter === FilterEnum.NONVEG;

  return (
    <div className="filter__container">
      <label htmlFor="ALL" className="filter__name">
        <input
          type="radio"
          name="filter"
          id="all"
          className="filter__input"
          onChange={() => triggerSetFilter(FilterEnum.ALL)}
          checked={isAllChecked}
        />
        <span>All</span>
      </label>
      <label htmlFor="veg" className="filter__name">
        <input
          type="radio"
          name="filter"
          id="veg"
          className="filter__input"
          onChange={() => triggerSetFilter(FilterEnum.VEG)}
          checked={isVegChecked}
        />
        <span>Veg</span>
      </label>
      <label htmlFor="non-veg" className="filter__name">
        <input
          type="radio"
          name="filter"
          id="non-veg"
          className="filter__input"
          onChange={() => triggerSetFilter(FilterEnum.NONVEG)}
          checked={isNonVegChecked}
        />
        <span>Non Veg</span>
      </label>
    </div>
  );
};

Filter.defaultProps = {
  triggerSetFilter: noop,
};

Filter.propTypes = {
  triggerSetFilter: PropTypes.func,
  filterAllRef: PropTypes.object,
};

export default Filter;
