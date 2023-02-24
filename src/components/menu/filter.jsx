const Filter = ({ setFilter }) => {
    return (
        <div className="filter">
          <label htmlFor="all">
            <input
              type="radio"
              name="filter"
              id="all"
              onChange={() => setFilter("ALL")}
            />
            <span>All</span>
          </label>
          <label htmlFor="veg">
            <input
              type="radio"
              name="filter"
              id="veg"
              onChange={() => setFilter("VEG")}
            />
            <span>Veg</span>
          </label>
          <label htmlFor="non-veg">
            <input
              type="radio"
              name="filter"
              id="non-veg"
              onChange={() => setFilter("NON VEG")}
            />
            <span>Non Veg</span>
          </label>
        </div>
    )
}

export default Filter;