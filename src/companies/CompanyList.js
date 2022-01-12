import React, { useState, useEffect } from "react";
import SearchForm from "../forms/SearchForm";
import JoblyApi from "../api/JoblyApi";
import CompanyCard from "./CompanyCard";
import LoadingMessage from "../common/LoadingMessage";

// on mount -> companies Routes -> CompanyCard, SearchForm

function CompanyList() {
  const [companies, setCompanies] = useState(null);

  useEffect(function getCompaniesOnMount() {
    searchCompanies();
  }, []);

  //Handle form submit -> api call to show companies with matching name. 
  async function searchCompanies(name) {
    let companies = await JoblyApi.getCompanies(name);
    setCompanies(companies);
  }

  if (!companies) return <LoadingMessage />;
 
  //pass in name, description, logo, handle to CompanyCard. 
  return (
      <div>
        <SearchForm searchFor={searchCompanies} />
        {companies.length
            ? (
                <div className="CompanyList">
                  {companies.map(c => (
                      <CompanyCard
                          key={c.handle}
                          handle={c.handle}
                          name={c.name}
                          description={c.description}
                          logoUrl={c.logoUrl}
                      />
                  ))}
                </div>
            ) : (
                <h2>No results found!</h2>
            )}
      </div>
  );
}

export default CompanyList;
