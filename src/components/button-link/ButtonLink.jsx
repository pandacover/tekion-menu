import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { noop } from "../../config";
import "./buttonLink.css";

const ButtonLink = ({ children, buttonLinkStyles, path, onClick }) => {
  const buttonLinkClassNames = "button__link " + buttonLinkStyles;

  return (
    <Link className={buttonLinkClassNames} to={path} onClick={onClick}>
      {children}
    </Link>
  );
};

ButtonLink.defaultProps = {
  onClick: noop,
};

ButtonLink.propTypes = {
  children: PropTypes.node,
  classname: PropTypes.string,
  path: PropTypes.string,
  onClick: PropTypes.func,
};

export default ButtonLink;
