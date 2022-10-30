import PropTypes from 'prop-types';

const ContactList = ({ contacts, handleDeleteContact }) => {
  return (
    <ul>
      {contacts.map(el => (
        <li key={el.id}>
          {el.name} {el.number}
          <button onClick={() => handleDeleteContact(el.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ContactList;
