import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operationsContacts';
import { selectVisibleContacts } from 'redux/selectors';

const ContactList = () => {
  const visibleContacts = useSelector(selectVisibleContacts);

  const dispatch = useDispatch();

  const handleDeleteContact = id => dispatch(deleteContact(id));

  return (
    <ul>
      {visibleContacts.length > 0
        ? visibleContacts?.map(el => (
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
