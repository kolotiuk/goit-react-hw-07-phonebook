import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts';
import { selectVisibleContacts, selectLoaderContacts } from 'redux/selectors';
import Spinner from 'components/Spinner';
import { ButtonList, List } from './ContactList.styled';

const ContactList = () => {
  const dispatch = useDispatch();

  const loader = useSelector(selectLoaderContacts);
  const visibleContacts = useSelector(selectVisibleContacts);

  const handleDeleteContact = id => dispatch(deleteContact(id));

  return (
    <ul>
      {loader ? (
        <Spinner />
      ) : visibleContacts?.length > 0 ? (
        visibleContacts?.map(({ id, name, phone }) => (
          <List key={id}>
            {name} {phone}
            <ButtonList onClick={() => handleDeleteContact(id)}>
              Delete
            </ButtonList>
          </List>
        ))
      ) : (
        'You dont have contacts yet'
      )}
    </ul>
  );
};

export default ContactList;
