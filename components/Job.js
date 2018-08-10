import React from "react";
import PropTypes from "prop-types";

const Job = props => (
  <article className="Job">
    <h3 className="Job__Title">{props.title}</h3>
    <p className="Job__Duration">{props.duration}</p>
    {props.children}
  </article>
);

Job.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired
};

Job.defaultProps = {
  children: null
};

export default Job;
