import global from "../../config";
import PropTypes from "prop-types";
import FilterEnum from "./FilterEnum";

const Filter = ({ triggerSetFilter, filterAllRef }) => {
  return (
    <div className="filter">
      <label htmlFor="ALL">
        <input
          type="radio"
          name="filter"
          id="all"
          ref={filterAllRef}
          onChange={() => triggerSetFilter(FilterEnum.ALL)}
        />
        <span>All</span>
      </label>
      <label htmlFor="veg">
        <input
          type="radio"
          name="filter"
          id="veg"
          onChange={() => triggerSetFilter(FilterEnum.VEG)}
        />
        <span>Veg</span>
      </label>
      <label htmlFor="non-veg">
        <input
          type="radio"
          name="filter"
          id="non-veg"
          onChange={() => triggerSetFilter(FilterEnum.NONVEG)}
        />
        <span>Non Veg</span>
      </label>
    </div>
  );
};

Filter.defaultProps = {
  triggerSetFilter: global.noop
}

Filter.propTypes = {
  triggerSetFilter: PropTypes.func,
  filterAllRef: PropTypes.object,
};

export default Filter;
