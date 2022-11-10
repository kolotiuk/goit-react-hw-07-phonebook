import { useState, useEffect } from 'react';

import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';

import { Container } from './Container.styled';

const STORAGE_KEY = 'contacts';

const App = () => {
  const [contacts, setContacts] = useState(
    () => JSON.parse(localStorage.getItem(STORAGE_KEY)) ?? []
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const parseStorage = JSON.parse(localStorage.getItem(STORAGE_KEY));

    if (parseStorage) {
      setContacts(parseStorage);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  const handleAddContact = contact => {
    console.log("contact", contact)
    const sameContact = contacts.find(el => el.name === contact.name);

    if (sameContact) {
      alert(`${contact.name} is already in contacts`);
      return;
    }

    setContacts([...contacts, contact]);
  };

  const handleChange = e => setFilter(e.target.value);

  const handleDeleteContact = id => {
    setContacts(contacts.filter(el => el.id !== id));
  };

  const filteredContacts = filter
    ? contacts.filter(el =>
        el.name.toLowerCase().includes(filter.toLowerCase())
      )
    : contacts;

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm handleAddContact={handleAddContact} />

      <h2>Contacts</h2>
      <Filter handleChange={handleChange} filter={filter} />
      <ContactList
        contacts={filteredContacts}
        handleDeleteContact={handleDeleteContact}
      />
    </Container>
  );
};

export default App;
