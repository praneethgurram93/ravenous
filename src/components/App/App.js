import React, {useState} from 'react';
import './App.css';
import BusinessList from "../BusinessList/BusinessList";
import SearchBar from "../SearchBar/SearchBar";

const App = () => {
  const [businesses, setBusinesses] = useState([]);

  return (
    <div className="App">
      <h1>ravenous</h1>
      <SearchBar handleSearchResults={setBusinesses}/>
      <BusinessList businesses={businesses}/>
    </div>
  );
};

export default App;
