import { useEffect, useState } from "react";
import JoblyApi from "../../helpers/api";
import JobCard from "./JobCard";
import SearchBox from "../forms/SearchBox";
import "./Jobs.css";

//called by App.js to api.js call JobCard.js and pass function for searching jobs to SearchBox form. 
function Jobs({ saveJob }) {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const getList = async () => {
      const res = await JoblyApi.getJobs();
      setJobs(res);
    };
    getList();
  }, []);

  const searchJobs = (searchTerm) => {
    const search = async () => {
      const res = await JoblyApi.searchJobs(searchTerm);
      setJobs(res);
    };
    search(searchTerm);
  };

  return (
    <div className="Jobs">
      <h1>Jobs</h1>
      <SearchBox doSearch={searchJobs} />
      {jobs.map((j) => (
        <JobCard key={j.id} job={j} saveJob={saveJob} />
      ))}
    </div>
  );
}

export default Jobs;
