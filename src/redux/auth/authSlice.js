import {
  currentUserThunk,
  logOutThunk,
  loginThunk,
  registerThunk,
} from './authThunk';

const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
  user: { name: null, email: null },
  token: '',
  isAuth: false,
  error: '',
  isAuthLoading: false,
  isFetchingCurrentUser: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(registerThunk.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isAuth = true;
        state.isAuthLoading = false;
      })
      .addCase(loginThunk.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isAuth = true;
        state.isAuthLoading = false;
      })
      .addCase(loginThunk.rejected, (state, { payload }) => {
        state.error = payload;
        state.isAuthLoading = false;
      })
      .addCase(logOutThunk.fulfilled, state => {
        state.user = { name: null, email: null };
        state.token = '';
        state.isAuth = false;
        state.error = '';
        state.isAuthLoading = false;
      })
      .addCase(logOutThunk.rejected, (state, { payload }) => {
        state.token = '';
        state.isAuth = false;
        state.error = payload;
        state.isAuthLoading = false;
      })
      .addCase(currentUserThunk.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.isAuth = true;
        state.isAuthLoading = false;
        state.isFetchingCurrentUser = false;
      })
      .addCase(currentUserThunk.pending, state => {
        state.isFetchingCurrentUser = true;
      })
      .addCase(currentUserThunk.rejected, (state, { payload }) => {
        state.isFetchingCurrentUser = false;
        state.error = payload;
      }),
});

export const authReducer = authSlice.reducer;
