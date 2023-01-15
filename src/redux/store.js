// import { combineReducers, createStore } from 'redux';
// import { devToolsEnhancer } from '@redux-devtools/extension';
import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer, filterReducer } from './reducer';

// export const rootReducer = combineReducers({
//   contacts: contactsReducer,
//   filter: filterReducer,
// });

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
});
