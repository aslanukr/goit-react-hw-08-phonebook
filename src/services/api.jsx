import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const fetchContacts = async () => {
  const { data } = await axios.get('/contacts');
  return data;
};

export const addContact = async newContact => {
  const { data } = await axios.post('/contacts', newContact);
  return data;
};

export const deleteContact = async id => {
  const { data } = await axios.delete(`/contacts/${id}`);
  return data;
};

// export const editContact = async ({ id, updatedContact }) => {
//   const { data } = await axios.put(`/contacts/${id}`, updatedContact);
//   return data;
// };

export const registerUser = async credentials => {
  const { data } = await axios.post('/users/signup', credentials);
  token.set(data.token);
  return data;
};

export const logIn = async credentials => {
  const { data } = await axios.post('/users/login', credentials);
  token.set(data.token);
  return data;
};

export const logOut = async () => {
  const { data } = await axios.post('/users/logout');
  token.unset();
  return data;
};

export const current = async () => {
  return axios.get('/users/current');
};
