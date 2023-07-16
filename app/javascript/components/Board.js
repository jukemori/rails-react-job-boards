import React, { useState, useEffect } from "react";
import Header from "./Header";
import JobList from "./JobList";

const Board = () => {
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await window.fetch("/api/boards/7/jobs");
        if (!response.ok) throw Error(response.statusText);
        const data = await response.json();
        setJobs(data);
      } catch (error) {
        setIsError(true);
        console.error(error);
      }

      setIsLoading(false);
    };

    fetchData();
  }, []);

  return (
    <>
      <Header />
      {isError && <p>Something went wrong. Check the console.</p>}

      {isLoading ? <p>Loading...</p> : <JobList jobs={jobs} />}
    </>
  );
};

export default Board;
