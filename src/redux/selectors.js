export const selectContacts = state => state.contacts.contacts.items;

export const selectFilteredContacts = state => state.contacts.filter;

export const selectVisibleContacts = state => {
  const filterName = selectFilteredContacts(state);
  const items = selectContacts(state);

  return filterName
    ? items.filter(el =>
        el.name.toLowerCase().includes(filterName.toLowerCase())
      )
    : items;
};
