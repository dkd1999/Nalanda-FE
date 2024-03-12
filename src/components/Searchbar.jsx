// SearchBar.js
import React from 'react';
import Autocomplete from './Autocomplete';

const SearchBar = () => {
  return (
    <div style={{paddingTop:'2vh'}}>
      {/* <h2>Search</h2> */}
      <Autocomplete />
    </div>
  );
};

export default SearchBar;
