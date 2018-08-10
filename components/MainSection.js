import React from "react";
import PropTypes from "prop-types";

const MainSection = props => (
  <section className="MainSection">
    {props.title && <h2 className="MainSection_Title">{props.title}</h2>}
    {props.children}
  </section>
);

MainSection.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string
};

MainSection.defaultProps = {
  children: null,
  title: null
};

export default MainSection;
