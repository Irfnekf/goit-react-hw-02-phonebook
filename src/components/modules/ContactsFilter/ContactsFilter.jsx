import PropTypes from 'prop-types';
import css from './contactsFilter.module.css';

const ContactsFilter = ({ handleChange }) => {
  return (
    <div className={css.searchWrapper}>
      <label className={css.label}> Find contacts by name</label>
      <input
        className={css.filterInput}
        name="filter"
        onChange={handleChange}
      />
    </div>
  );
};

ContactsFilter.propTypes = {
  handleChange: PropTypes.func.isRequired,
};

export default ContactsFilter;
