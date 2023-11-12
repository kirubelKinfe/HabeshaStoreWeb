import { useState } from 'react';
import './Search.scss'

const Search = () => {
    const [searchField, setSearchField] = useState('');

  const search = () => {

  }

  return (
    <form onSubmit={search} className="searchForm">
        <input  type="text" placeholder='Search' value={searchField} onChange={setSearchField} />
        <button type='submit'>Search</button>
    </form>
  )
}

export default Search