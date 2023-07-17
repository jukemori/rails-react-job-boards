import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const JobList = ({ jobs }) =>
  jobs.map((job) => (
    <li key={job.id}>
      <Link to={`/jobs/${job.id}`}>{job.title}</Link>
    </li>
  ));

JobList.propTypes = {
  jobs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      company: PropTypes.string,
      title: PropTypes.string,
      url: PropTypes.string,
      board_id: PropTypes.number,
      note: PropTypes.string,
      status: PropTypes.string,
    })
  ).isRequired,
};

export default JobList;
