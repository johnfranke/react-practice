import React from "react";
import "./style.css";

function SearchResults(props) {
  return (
    <ul className="list-group search-results">
      {props.results.map(result => (
        <span key={result} className="list-group-item">
          <img alt="Dog" src={result} className="img-fluid" />
        </span>
      ))}
    </ul>
  );
}

export default SearchResults;
