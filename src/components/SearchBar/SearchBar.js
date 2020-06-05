import React, {useState} from 'react';
import './SearchBar.css';

const SearchBar = () => {
  const [term, setTerm] = useState('');
  const [location, setLocation] = useState('');
  const [sortBy, setSortBy] = useState('best_match');

  const sortByOptions = {
    "Best Match": "best_match",
    "Highest Rated": "rating",
    "Most Reviewed": "review_count"
  };

  const getSortByClass = sortByOption => {
    return sortBy === sortByOption ? 'active' : '';
  };

  const handleTermChange = event => setTerm(event.target.value);

  const handleLocationChange = event => setLocation(event.target.value);

  const searchYelp = () => {
    console.log('Searching Yelp with Pizza, Brooklyn, best_match');
  };

  const handleSearch = event => {
    searchYelp();
    event.preventDefault();
  };

  const renderSortByOptions = () => (
    Object.keys(sortByOptions).map(sortByOption => (
      <li
        className={getSortByClass(sortByOptions[sortByOption])}
        value={sortByOption}
        onClick={() => setSortBy(sortByOptions[sortByOption])}
        key={sortByOptions[sortByOption]}
      >
        {sortByOption}
      </li>
    ))
  );


  return (
    <div className="SearchBar">
      <div className="SearchBar-sort-options">
        <ul>
          {renderSortByOptions()}
        </ul>
      </div>
      <div className="SearchBar-fields">
        <input
          placeholder="Search Businesses"
          value={term}
          onChange={handleTermChange}
        />
        <input
          placeholder="Where?"
          value={location}
          onChange={handleLocationChange}
        />
      </div>
      <div className="SearchBar-submit">
        <a onClick={handleSearch}>Let's Go</a>
      </div>
    </div>
  );

};


export default SearchBar;
