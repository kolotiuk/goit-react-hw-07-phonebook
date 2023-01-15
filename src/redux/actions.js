import { createAction } from '@reduxjs/toolkit';
import { v4 as uuid } from 'uuid';

export const addContact = createAction('contact/addContact', text => {
  return {
    payload: {
      text,
      id: uuid(),
    },
  };
});

export const deleteContact = createAction('contact/addContact');

export const filterContact = createAction('contact/addContact');
// export const addContact = (name, tel) => {
//   return {
//     type: 'contact/addContact',
//     payload: {
//       id: uuid(),
//       name,
//       tel,
//     },
//   };
// };

// export const deleteContact = contactId => {
//   return {
//     type: 'contact/deleteContact',
//     payload: contactId,
//   };
// };

// export const filterContact = filter => {
//   return {
//     type: 'contact/filterContact',
//     payload: filter,
//   };
// };
