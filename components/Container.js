import React from "react";
import PropTypes from "prop-types";

const Container = props => (
  <div className="OuterContainer">
    <div className="ColumnContainer">{props.children}</div>
  </div>
);

Container.propTypes = {
  children: PropTypes.node
};

Container.defaultProps = {
  children: null
};

export default Container;
