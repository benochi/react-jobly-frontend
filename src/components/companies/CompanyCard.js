import { Link } from "react-router-dom";
import "./CompanyCard.css";

//CompanyCard Link, name, description from p[assed in company obj. 
function CompanyCard({ company }) {
  return (
    <div className="CompanyCard">
      <Link to={`/companies/${company.handle}`}>
        <h3>{company.name}</h3>
        <p>{company.description}</p>
      </Link>
    </div>
  );
}

export default CompanyCard;
