import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { MdSearch } from 'react-icons/md';
import s from './Searchbar.module.css';

export default function Searchbar({ onSubmit }) {
  const [query, setQuery] = useState('');
  const location = useLocation();

  const handleSubmit = e => {
    e.preventDefault();
    const inputedQuery = e.target[1].value;
    if (!inputedQuery.trim()) return;
    onSubmit(inputedQuery);
    setQuery('');
    console.log(location);
    localStorage.setItem('url', [location.pathname, location.search].join(''));
  };

  return (
    <header className={s.searchbar}>
      <form className={s.searchForm} onSubmit={handleSubmit}>
        <button className={s.button} type="submit">
          <MdSearch />
        </button>
        <input
          className={s.input}
          name="query"
          value={query}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
          onChange={e => setQuery(e.target.value)}
        />
      </form>
    </header>
  );
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
