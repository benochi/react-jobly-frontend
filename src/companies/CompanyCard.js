import React from "react";
import { Link } from "react-router-dom";
import "./CompanyCard.css";

//card for individual company called by CompanyList

function Companycard({ name, description, logoUrl, handle }) {
  return (
      <div className="CompanyCard col-md-6 col-lg-8 offset-md-3 offset-lg-4">
        <Link to={`/companies/${handle}`}>
        <h3>
          {name}
          {logoUrl && <img src={logoUrl}
                             alt={name}
                             className="float-right ml-5" />}
        </h3>
        <p>{description}</p>
        </Link>
      </div>
    
  );
}

export default Companycard;