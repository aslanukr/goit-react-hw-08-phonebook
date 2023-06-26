import { logOutThunk, loginThunk, registerThunk } from './authThunk';

const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
  user: { name: null, email: null },
  token: null,
  isAuth: false,
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
      })
      .addCase(loginThunk.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isAuth = true;
      })
      .addCase(logOutThunk.fulfilled, (state, _) => {
        state.user = null;
        state.token = null;
        state.isAuth = false;
      }),
});

export const authReducer = authSlice.reducer;
