import React, {useState} from 'react';
import './SearchBar.css';
import {search} from "../../services/Yelp";

const SearchBar = ({handleSearchResults}) => {
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

  const searchYelp = async () => {
     try {
       const response = await search(term, location, sortBy);
       if (!response.businesses) {
         throw new Error('response doesn\'t contain key businesses');
       }
       const businesses = [];

       response.businesses.forEach(business => {
         businesses.push({
           id : business.id,
           imageSrc: business.image_url,
           reviewCount: business.review_count,
           rating: business.rating,
           category: business.categories[0].title,
           address: business.location.address1,
           city: business.location.city,
           state: business.location.state,
           zipCode: business.location.zip_code,
           name: business.name,
         });
       });

       // this function call updates BusinessList component
       handleSearchResults(businesses);
     } catch (e) {
       console.log(e);
     }
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
