import React from 'react';
import ResultList from './ResultList';

import { useSearch } from '../utils/SearchContext';

export default function SearchComponent() {
    const { results, searchFoods } = useSearch();

    const handleSearch = async (e) => {
        e.preventDefault();

        const query = 'Big Mac';
        searchFoods(query);
    }

    return (
        <>
          <button id="search-btn" onClick={handleSearch}>
            Search
          </button>
          <div>
            <ResultList results={results} />
          </div>
        </>
      );
}