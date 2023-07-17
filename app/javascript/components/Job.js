import React from "react";
import PropTypes from "prop-types";
// eslint-disable-next-line import/no-extraneous-dependencies
import { useParams } from "react-router-dom";

const Job = ({ jobs }) => {
  const { id } = useParams();
  const job = jobs.find((e) => e.id === Number(id));

  return (
    <>
      <h2>{job.company}</h2>
      <ul>
        <li>
          <strong>Title:</strong> {job.title}
        </li>
        <li>
          <strong>Url:</strong> {job.url}
        </li>
        <li>
          <strong>Note:</strong> {job.note}
        </li>
        <li>
          <strong>Status:</strong> {job.status}
        </li>
      </ul>
    </>
  );
};

Job.propTypes = {
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

export default Job;
