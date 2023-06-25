import { combineReducers } from 'redux';
import { filterReducer } from './filter/filterSlice';
import { contactsReducer } from './contacts/contactsSlice';

export const reducer = combineReducers({
  filter: filterReducer,
  contacts: contactsReducer,
});
