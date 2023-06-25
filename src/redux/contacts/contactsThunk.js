import { createAsyncThunk } from '@reduxjs/toolkit';
import { addContact, deleteContact, fetchContacts } from 'services/api';

export const getContactsThunk = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, thunkAPI) => {
    try {
      return await fetchContacts();
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addContactsThunk = createAsyncThunk(
  'contacts/addContacts',
  async (newContact, thunkAPI) => {
    try {
      return await addContact(newContact);
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteContactsThunk = createAsyncThunk(
  'contacts/deleteContacts',
  async (id, thunkAPI) => {
    try {
      return await deleteContact(id);
    } catch (e) {
      return thunkAPI.fulfillWithValue(e.message);
    }
  }
);

// export const editContactsThunk = createAsyncThunk(
//   'contacts/editContacts',
//   async (id, updatedContact) => {
//     return await editContact(id, updatedContact);
//   }
// );
