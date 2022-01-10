import CompanyCard from "./CompanyCard";

//generate companycards from obj
function CompanyList({ companies }) {
  return (
    <div>
      {companies.map((c) => (
        <CompanyCard key={c.handle} company={c} />
      ))}
    </div>
  );
}

export default CompanyList;
