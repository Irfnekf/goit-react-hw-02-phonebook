import PropTypes from 'prop-types';

const ContactsList = ({ removeContact, contacts }) => {
  const item = contacts.map(({ id, name, number }) => (
    <li key={id}>
      {name}: {number}
      <button onClick={() => removeContact(id)} type="button">
        Delete
      </button>
    </li>
  ));
  return <ol>{item}</ol>;
};

ContactsList.propTypes = {
  removeContact: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.number.isRequired,
    })
  ),
};

export default ContactsList;
