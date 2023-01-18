// import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/toolkit/slice';
import { getContacts, getFilteredContacts } from 'redux/selectors';

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filterName = useSelector(getFilteredContacts);

  const dispatch = useDispatch();

  const filteredContacts = filterName
    ? contacts.filter(el =>
        el.name.toLowerCase().includes(filterName.toLowerCase())
      )
    : contacts;

  const handleDeleteContact = id => dispatch(deleteContact(id));

  return (
    <ul>
      {filteredContacts.length > 0
        ? filteredContacts.map(el => (
            <li key={el.id}>
              {el.name} {el.tel}
              <button onClick={() => handleDeleteContact(el.id)}>Delete</button>
            </li>
          ))
        : 'You dont have contacts yet'}
    </ul>
  );
};

// ContactList.propTypes = {
// contacts: PropTypes.arrayOf(
//   PropTypes.shape({
//     name: PropTypes.string.isRequired,
//     number: PropTypes.string.isRequired,
//     id: PropTypes.string.isRequired,
//   })
// ).isRequired,
// };

export default ContactList;
