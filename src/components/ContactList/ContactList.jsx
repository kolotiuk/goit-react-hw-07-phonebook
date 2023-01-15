// import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/actions';
import { getContacts, getFilteredContacts } from './../../redux/selectors';

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilteredContacts);
  const dispatch = useDispatch();

  const filteredContacts = filter
    ? contacts.filter(el =>
        el.name.toLowerCase().includes(filter.toLowerCase())
      )
    : contacts;

  const handleDeleteContact = id => dispatch(deleteContact(id));

  return (
    <ul>
      {filteredContacts.map(el => (
        <li key={el.id}>
          {el.name} {el.tel}
          <button onClick={() => handleDeleteContact(el.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

// ContactList.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//       id: PropTypes.string.isRequired,
//     })
//   ).isRequired,
// };

export default ContactList;
