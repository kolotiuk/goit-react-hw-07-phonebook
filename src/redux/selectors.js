import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.contacts.items;

export const selectFilteredContacts = state => state.contacts.filter;

export const selectLoaderContacts = state => state.contacts.contacts.isLoading;

export const selectVisibleContacts = createSelector(
  [selectContacts, selectFilteredContacts],
  (items, filterName) => {
    return filterName
      ? items.filter(el =>
          el.name.toLowerCase().includes(filterName.toLowerCase())
        )
      : items;
  }
);
