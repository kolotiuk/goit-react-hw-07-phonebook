import { fetchContacts } from 'redux/toolkit';
import { Container } from './Container.styled';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { selectErrorContacts } from 'redux/selectors';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import Error from './Error';

const App = () => {
  const dispatch = useDispatch();
  // const isError = useSelector(state => state.contacts.error);
  const isError = useSelector(selectErrorContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm />

      <h2>Contacts</h2>
      <Filter />
      {isError ? <Error /> : <ContactList />}
    </Container>
  );
};

export default App;
