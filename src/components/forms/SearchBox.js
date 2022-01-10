import { useState } from "react";
import "./SearchBox.css";

//handle searchbox with obj passed from Companies.js/Jobs.js
function SearchBox({ doSearch }) {
  const [searchTerm, setSearchTerm] = useState("");
  const handleChange = (evt) => {
    setSearchTerm(evt.target.value);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    doSearch(searchTerm);
  };

  return (
    <div className="SearchBox">
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} />
        <button>Search</button>
      </form>
    </div>
  );
}

export default SearchBox;
