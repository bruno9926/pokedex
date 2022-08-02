import React from 'react';
import './SearchInput.css';

const SearchInput = () => {
  return (
    <div className='search-input-container'>
      <input type="text" placeholder='Nombre' className='search-field'/>
      <button className='search-button'>
          <img src="/assets/icons/search.png" alt="search icon" />
      </button>
    </div>
  )
}

export default SearchInput