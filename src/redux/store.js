import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer, persistedContactsReducer } from './slice';
import { persistStore } from 'redux-persist';

export const store = configureStore({
  reducer: {
    contacts: persistedContactsReducer,
    filter: contactsReducer,
  },
});

export const persistor = persistStore(store);
