import axios from 'axios';

const contactsInstance = axios.create({
  baseURL: 'https://65c7bc59e7c384aada6ee4a8.mockapi.io/',
});


export const requestContacts = async () => {
  const { data } = await contactsInstance.get('/contacts');
  return data;
};

export const requestAddContact = async newContact => {
  const { data } = await contactsInstance.post('/contacts', newContact);
  return data;
};

export const requestDeleteContact = async contactId => {
  const { data } = await contactsInstance.delete(`/contacts/${contactId}`);
  return data;
};