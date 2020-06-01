import React from 'react';
import './SearchBar.css';

const SearchBar = () => {

  const sortByOptions = {
    "Best Match": "best_match",
    "Highest Rated": "rating",
    "Most Reviewed": "review_count"
  };

  const renderSortByOptions = () => (
    Object.keys(sortByOptions).map(sortByOption => (
      <li key={sortByOptions[sortByOption]}>{sortByOption}</li>
    ))
  );

  return (
    <div className="searchBar">
      <div className="SearchBar-sort-options">
        <ul>
          {renderSortByOptions()}
        </ul>
      </div>
      <div className="SearchBar-fields">
        <input placeholder="Search Businesses" />
        <input placeholder="Where?"/>
      </div>
      <div className="SearchBar-submit">
        <a>Let's Go</a>
      </div>
    </div>
  );

};


export default SearchBar;
