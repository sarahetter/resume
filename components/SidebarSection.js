import React from "react";
import PropTypes from "prop-types";

const SidebarSection = props => (
  <section className="SidebarSection">
    {props.title && <h2 className="SidebarSection__Title">{props.title}</h2>}
    {props.children}
  </section>
);

SidebarSection.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string
};

SidebarSection.defaultProps = {
  children: null,
  title: null
};

export default SidebarSection;
