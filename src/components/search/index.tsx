import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const Search = () => {
  const navigate = useNavigate()
  const searchInputRef = useRef<HTMLInputElement | null>(null);

  const onSearchHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (searchInputRef.current) {
      const searchQuery = new URLSearchParams({
        name: searchInputRef.current.value
      }).toString();
      navigate({ pathname: '/search', search: searchQuery })
    }
  };

  return (
    <form onSubmit={onSearchHandler} className="search-form">
      <input type="text" className="search" ref={searchInputRef} placeholder="Search for a pet" />
      <button type="submit" className="search-button">
        🔎
      </button>
    </form>
  );
};

export default Search;
