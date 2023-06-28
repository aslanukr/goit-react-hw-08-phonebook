import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';
import { getContactsThunk } from './contactsThunk';
import { logOutThunk } from 'redux/auth/authThunk';

export const handlePending = state => {
  state.isLoading = true;
  state.error = '';
};

export const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialState,
  extraReducers: builder => {
    builder
      .addCase(getContactsThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = '';
        state.items = payload;
      })
      .addCase(logOutThunk.fulfilled, state => {
        state.isLoading = false;
        state.error = '';
        state.items = [];
      })
      .addMatcher(action => action.type.endsWith('/pending'), handlePending)
      .addMatcher(action => action.type.endsWith('/rejected'), handleRejected);
  },
});

export const contactsReducer = contactsSlice.reducer;
