import { createSelector } from '@reduxjs/toolkit';

export const selectIsAuth = state => state.auth.isAuth;
export const selectEmail = state => state.auth.user.email;
export const selectName = state => state.auth.user.name;

export const selectContacts = state => state.contacts.items;
export const selectFilter = state => state.filter;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectContactsError = state => state.contacts.error;

export const selectVisibleContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase().trim();
    const sortedContacts = contacts.toSorted((a, b) =>
      a.name.localeCompare(b.name)
    );
    return sortedContacts.filter(sortedContact =>
      sortedContact.name.toLowerCase().includes(normalizedFilter)
    );
  }
);
