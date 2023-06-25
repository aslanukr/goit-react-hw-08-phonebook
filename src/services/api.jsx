import axios from 'axios';

axios.defaults.baseURL =
  'https://648f662f75a96b664445168f.mockapi.io/phonebook';

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
