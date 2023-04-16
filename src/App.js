import React from 'react';

import './App.css';
import Header from './components/Header';
import SearchProvider from './utils/SearchContext';
import SearchComponent from './components/SearchComponent';

function App() {
  return (
    <>
      <Header />
      <SearchProvider>
        <SearchComponent />
      </SearchProvider>
    </>
  );
}

export default App;
