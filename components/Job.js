import React from "react";
import PropTypes from "prop-types";

const Job = props => (
  <article className="Job">
    <h3 className="Job__Title">{props.title}</h3>
    {props.companyDescription && (
      <p className="Job__CompanyDescription">{props.companyDescription}</p>
    )}
    <div className="Job__Description">{props.children}</div>
  </article>
);

Job.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string.isRequired,
  companyDescription: PropTypes.string
};

Job.defaultProps = {
  children: null,
  companyDescription: ""
};

export default Job;
