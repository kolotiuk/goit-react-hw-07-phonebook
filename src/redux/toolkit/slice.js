import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuid } from 'uuid';
import { fetchContacts, addContact } from './../operationsContacts';

const handlePending = state => {
  state.contacts.isLoading = true;
};

const handleRejected = (state, action) => {
  state.contacts.isLoading = false;
  state.contacts.error = action.payload;
};

const initialState = {
  // contacts: [],
  // filter: '',
  contacts: {
    items: [],
    isLoading: false,
    error: null,
  },
  filter: '',
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialState,
  reducers: {
    // addContact: {
    //   reducer(state, action) {
    //     state.contacts.items.push(action.payload);
    //   },
    //   prepare(name, tel) {
    //     return {
    //       payload: {
    //         id: uuid(),
    //         name,
    //         tel,
    //       },
    //     };
    //   },
    // },
    deleteContact(state, action) {
      state.contacts.items = state.contacts.items.filter(
        contact => contact.id !== action.payload
      );
    },
    filterContact(state, action) {
      state.filter = action.payload;
    },
  },
  extraReducers: {
    [fetchContacts.pending]: handlePending,
    [fetchContacts.fulfilled]: (state, action) => {
      state.contacts.isLoading = false;
      state.contacts.error = null;
      state.contacts.items = action.payload;
    },
    [fetchContacts.rejected]: handleRejected,

    [addContact.pending]: handlePending,
    [addContact.fulfilled]: (state, action) => {
      state.contacts.isLoading = false;
      state.contacts.error = null;
      state.contacts.items.push(action.payload);
    },
  },
});

export const { deleteContact, filterContact } = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;
