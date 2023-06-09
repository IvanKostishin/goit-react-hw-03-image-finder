import './Searchbar.css';
import propTypes from 'prop-types';
const Searchbar = ({ handleChenge, onSubmit, value }) => {
  return (
    <header className="searchbar">
      <form className="SearchForm" onSubmit={onSubmit}>
        <button type="submit" className="SearchForm-button ">
          <span className="SearchForm-button-label ">Search</span>
        </button>

        <input
          onChange={handleChenge}
          className="SearchForm-input "
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={value}
        />
      </form>
    </header>
  );
};
export default Searchbar;
Searchbar.propTypes = {
  handleChenge: propTypes.func.isRequired,
  onSubmit: propTypes.func.isRequired,
  value: propTypes.string.isRequired,
};
