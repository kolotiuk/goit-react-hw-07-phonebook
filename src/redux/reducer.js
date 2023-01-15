import { addContact, deleteContact, filterContact } from './actions';

const initialState = {
  contacts: [],
  filter: '',
};

export const contactsReducer = (state = initialState, action) => {
  switch (action.type) {
    case addContact.type:
      return {
        contacts: [...state.contacts, action.payload],
      };
    case deleteContact.type:
      return {
        contacts: state.contacts.filter(contact => {
          return contact.id !== action.payload;
        }),
      };
    default:
      return state;
  }
};

export const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case filterContact.type:
      return {
        ...state,
        filter: action.payload,
      };
    default:
      return state;
  }
};
