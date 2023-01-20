import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operationsContacts';
import { getContacts, getFilteredContacts } from 'redux/selectors';

const ContactList = () => {
  const { items } = useSelector(getContacts);
  const filterName = useSelector(getFilteredContacts);

  const dispatch = useDispatch();

  const filteredContacts = filterName
    ? items.filter(el =>
        el.name.toLowerCase().includes(filterName.toLowerCase())
      )
    : items;

  const handleDeleteContact = id => dispatch(deleteContact(id));

  return (
    <ul>
      {filteredContacts.length > 0
        ? filteredContacts?.map(el => (
            <li key={el.id}>
              {el.name} {el.phone}
              <button onClick={() => handleDeleteContact(el.id)}>Delete</button>
            </li>
          ))
        : 'You dont have contacts yet'}
    </ul>
  );
};

export default ContactList;
