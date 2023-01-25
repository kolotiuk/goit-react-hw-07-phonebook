import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operationsContacts';
import { selectVisibleContacts, selectLoaderContacts } from 'redux/selectors';
import Spinner from './../Spinner/Spinner';

const ContactList = () => {
  const dispatch = useDispatch();

  const visibleContacts = useSelector(selectVisibleContacts);
  const loader = useSelector(selectLoaderContacts);

  const handleDeleteContact = id => dispatch(deleteContact(id));

  return (
    <ul>
      {loader ? (
        <Spinner />
      ) : visibleContacts.length > 0 ? (
        visibleContacts?.map(el => (
          <li key={el.id}>
            {el.name} {el.phone}
            <button onClick={() => handleDeleteContact(el.id)}>Delete</button>
          </li>
        ))
      ) : (
        'You dont have contacts yet'
      )}
    </ul>
  );
};

export default ContactList;
