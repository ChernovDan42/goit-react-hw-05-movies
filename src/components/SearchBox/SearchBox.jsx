import PropTypes from 'prop-types';
import css from '../styles/page_styles.module.css';

export const SearchBox = ({ submitQuery }) => {
  return (
    <div className={css.containeer}>
      <form onSubmit={submitQuery}>
        <input type="text" name="name" />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

SearchBox.propTypes = {
  submitQuery: PropTypes.func.isRequired,
};
