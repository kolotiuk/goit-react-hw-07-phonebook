import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './toolkit/slice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
});
