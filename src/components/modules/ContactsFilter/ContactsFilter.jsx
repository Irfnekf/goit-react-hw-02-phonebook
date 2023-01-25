import PropTypes from 'prop-types';

const ContactsFilter = ({ handleChange }) => {
  return (
    <div>
      <label label> Find contacts by name</label>
      <input name="filter" onChange={handleChange} />
    </div>
  );
};

ContactsFilter.propTypes = {
  handleChange: PropTypes.func.isRequired,
};

export default ContactsFilter;
