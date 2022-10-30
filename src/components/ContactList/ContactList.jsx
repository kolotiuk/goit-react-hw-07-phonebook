import React from 'react';

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

export default ContactList;
