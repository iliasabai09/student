import React from 'react';
import '../Styles/SearchBar.css';

const SearchBar = ({ placeholder, handleSearch }) => {
  return (
    <div className="search-bar">
      <input
        type="text"
        className="search-input"
        placeholder={placeholder}
        onChange={handleSearch}
      />
      <button className="search-button">
        <i className="fa fa-search"></i>
      </button>
    </div>
  );
};

export default SearchBar;
