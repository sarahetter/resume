import React from "react";
import PropTypes from "prop-types";

const Container = props => (
  <div className="OuterContainer">
    <style jsx>
      {`
        .OuterContainer {
          display: flex;
          flex-direction: column;
          width: 100%;
          max-width: 1000px;
          height: 100%;
          margin: 20px auto;
          background-color: #fff;
        }
        .ColumnContainer {
          display: flex;
          flex: 1;
          flex-flow: row wrap;
        }
      `}
    </style>
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
