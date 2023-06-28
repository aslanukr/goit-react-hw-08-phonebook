import { Form, FormLabel, Input, SectionTitle } from 'components/Styles.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectContactsError } from 'redux/selectors';
import {
  addContactsThunk,
  getContactsThunk,
} from 'redux/contacts/contactsThunk';
import Swal from 'sweetalert2';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { Button } from '@mui/material';

export function ContactForm({ onClose }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(selectContacts);
  const error = useSelector(selectContactsError);
  const dispatch = useDispatch();

  const handleChange = ({ target: { value, name } }) => {
    name === 'name' ? setName(value) : setNumber(value);
  };

  const handleSubmit = async e => {
    e.preventDefault();

    const normalizedName = name.toLowerCase().trim();

    if (
      contacts.find(
        contact => contact.name.toLowerCase().trim() === normalizedName
      )
    ) {
      Swal.fire({
        icon: 'info',
        title: `${name} is already in contacts`,
        confirmButtonColor: '#4289fe',
      });
      return;
    } else {
      const newContact = { name, number };
      onClose();
      await dispatch(addContactsThunk(newContact));
      await dispatch(getContactsThunk());
      setName('');
      setNumber('');

      if (error) {
        Swal.fire({
          icon: 'error',
          position: 'top-center',
          title: 'Error!',
          text: `${error}`,
          showConfirmButton: false,
          timer: 2000,
        });
        return;
      } else {
        Swal.fire({
          icon: 'success',
          position: 'top-center',
          title: 'Success!',
          text: `${name} has been successfully added!`,
          showConfirmButton: false,
          timer: 2000,
        });
      }
    }
  };

  return (
    <>
      <SectionTitle>Add contact</SectionTitle>
      <Form onSubmit={handleSubmit} autoComplete="off">
        <FormLabel>
          Name
          <Input
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </FormLabel>
        <FormLabel>
          Number
          <Input
            type="tel"
            name="number"
            value={number}
            onChange={handleChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </FormLabel>
        <Button type="submit" disabled={!name || !number} variant="contained">
          Add contact
        </Button>
      </Form>
    </>
  );
}

ContactForm.propTypes = {
  onClose: PropTypes.func.isRequired,
};
