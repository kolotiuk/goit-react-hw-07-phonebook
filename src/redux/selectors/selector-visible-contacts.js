import { createSelector } from '@reduxjs/toolkit';
import { selectContacts } from 'redux/selectors';
import { selectFilteredContacts } from 'redux/selectors';

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
