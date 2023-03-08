import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/toolkit';
import { selectErrorContacts } from 'redux/selectors';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import Error from './Error';
import { Container } from './Container.styled';

const App = () => {
  const dispatch = useDispatch();
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
