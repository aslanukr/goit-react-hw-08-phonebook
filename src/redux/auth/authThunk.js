import { logIn, logOut, registerUser } from 'services/api';

const { createAsyncThunk } = require('@reduxjs/toolkit');

export const registerThunk = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      return await registerUser(credentials);
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const loginThunk = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      return await logIn(credentials);
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const logOutThunk = createAsyncThunk(
  'auth/logout',
  async (_, thunkAPI) => {
    try {
      return await logOut();
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
