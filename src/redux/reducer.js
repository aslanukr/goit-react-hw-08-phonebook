import { combineReducers } from 'redux';
import { filterReducer } from './filter/filterSlice';
import { contactsReducer } from './contacts/contactsSlice';
import { authReducer } from './auth/authSlice';

export const reducer = combineReducers({
  filter: filterReducer,
  contacts: contactsReducer,
  auth: authReducer,
});
