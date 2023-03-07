import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import global from "../../config";
import "./buttonLink.css";
import React from "react";

const ButtonLink = ({ children, classname, path, onClick }) => {
  const className = "button__link " + classname;

  return (
    <Link className={className} to={path} onClick={onClick}>
      {children}
    </Link>
  );
};

ButtonLink.defaultProps = {
  onClick: global.noop,
};

ButtonLink.propTypes = {
  children: PropTypes.node,
  classname: PropTypes.string,
  path: PropTypes.string,
  onClick: PropTypes.func,
};

export default ButtonLink;
