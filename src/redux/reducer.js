const initialState = {
  contacts: [],
  filter: '',
};

export const contactsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'contact/addContact':
      return {
        contacts: [...state.contacts, action.payload],
      };
    case 'contact/deleteContact':
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
    case 'contact/filterContact':
      return {
        ...state,
        filter: action.payload,
      };
    default:
      return state;
  }
};
