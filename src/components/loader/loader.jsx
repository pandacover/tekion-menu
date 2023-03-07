import PropTypes from "prop-types";
import "./loader.css";

const Loader = ({ children, isLoading })  => {
  if(!isLoading) return children;
  return (
    <div className="loader-container">
      <div className="loader" />
    </div>
  )
}

Loader.propTypes = {
  children: PropTypes.node,
  isLoading: PropTypes.bool
}

export default Loader;
