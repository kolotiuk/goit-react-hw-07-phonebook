import { createReducer } from '@reduxjs/toolkit';
import { addContact, deleteContact, filterContact } from './actions';

const initialState = {
  contacts: [],
  filter: '',
};

export const contactsReducer = createReducer(initialState, {
  [addContact]: (state, action) => {
    state.contacts.push(action.payload);
  },
  [deleteContact]: (state, action) => {
    return {
      contacts: state.contacts.filter(contact => contact.id !== action.payload),
    };
  },
  [filterContact]: (state, action) => {
    state.filter = action.payload;
  },
});

export const filterReducer = createReducer(initialState, {
  [filterContact]: (state, action) => {
    state.filter = action.payload;
  },
});
