import global from "../../config";
import PropTypes from "prop-types";
import FilterEnum from "./FilterEnum";

const Filter = ({ triggerSetFilter, filterAllRef }) => {
  return (
    <div className="filter__container">
      <label htmlFor="ALL" className="filter__name">
        <input
          type="radio"
          name="filter"
          id="all"
          ref={filterAllRef}
          className="filter__input"
          onChange={() => triggerSetFilter(FilterEnum.ALL)}
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
        />
        <span>Non Veg</span>
      </label>
    </div>
  );
};

Filter.defaultProps = {
  triggerSetFilter: global.noop,
};

Filter.propTypes = {
  triggerSetFilter: PropTypes.func,
  filterAllRef: PropTypes.object,
};

export default Filter;
