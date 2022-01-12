import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import JoblyApi from "../api/JoblyApi";
import JobCardList from "../jobs/JobCardList";
import LoadingMessage from "../common/LoadingMessage";

// Company Detail page.
//Route -> companies/:handle show infor and jobs at company.  
function CompanyDetail() {
  const { handle } = useParams();
  const [company, setCompany] = useState(null);

  //handle API call to Routes
  useEffect(function getCompanyAndJobsForUser() {
    async function getCompany() {
      setCompany(await JoblyApi.getCompany(handle));
    }
    getCompany();
  }, [handle]);

  if (!company) return <LoadingMessage />;

  return (
    <div className="CompanyDetail">
      <h2>{company.name}</h2>
      <p>{company.description}</p>
        <JobCardList jobs={company.jobs} />
      </div>
  );
}

export default CompanyDetail;
