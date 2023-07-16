import React from "react";
import PropTypes from "prop-types";

const JobList = ({ jobs }) => {
  const renderJobs = (jobArray) =>
    jobArray.map((job) => <li key={job.id}>{job.title}</li>);

  return (
    <section>
      <h2>jobs</h2>
      <ul>{renderJobs(jobs)}</ul>
    </section>
  );
};

JobList.propTypes = {
  jobs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      company: PropTypes.string,
      title: PropTypes.string,
      url: PropTypes.string,
      board_id: PropTypes.number,
      note: PropTypes.string,
      published: PropTypes.bool,
    })
  ).isRequired,
};

export default JobList;
