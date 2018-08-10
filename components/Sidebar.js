import React from "react";
import PropTypes from "prop-types";

const Sidebar = props => <div className="Sidebar">{props.children}</div>;

Sidebar.propTypes = {
  children: PropTypes.node
};

Sidebar.defaultProps = {
  children: null
};

export default Sidebar;
