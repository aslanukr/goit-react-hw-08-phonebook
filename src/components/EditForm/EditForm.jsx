import { Form, FormLabel, Input, SectionTitle } from 'components/Styles.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectContactsError } from 'redux/selectors';
import {
  editContactsThunk,
  getContactsThunk,
} from 'redux/contacts/contactsThunk';
import Swal from 'sweetalert2';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { Button } from '@mui/material';

export function EditForm({ onClose, contact }) {
  const { id, name, number } = contact;
  const [updatedName, setUpdatedName] = useState('');
  const [updatedNumber, setUpdatedNumber] = useState('');

  useEffect(() => {
    setUpdatedName(name);
    setUpdatedNumber(number);
  }, [name, number]);

  const contacts = useSelector(selectContacts);
  const error = useSelector(selectContactsError);
  const dispatch = useDispatch();

  const handleChange = ({ target: { value, name } }) => {
    name === 'name' ? setUpdatedName(value) : setUpdatedNumber(value);
  };

  const handleSubmit = async e => {
    e.preventDefault();

    const normalizedName = updatedName.toLowerCase().trim();

    if (
      contacts.find(
        contact =>
          contact.name.toLowerCase().trim() === normalizedName &&
          contact.id !== id
      )
    ) {
      Swal.fire({
        icon: 'info',
        title: `${updatedName} is already in contacts`,
        confirmButtonColor: '#4289fe',
      });
      return;
    } else {
      const updatedContact = { name: updatedName, number: updatedNumber };
      onClose();
      await dispatch(editContactsThunk({ id, updatedContact }));
      await dispatch(getContactsThunk());
      setUpdatedName('');
      setUpdatedNumber('');

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
          text: `Contact has been successfully edited!`,
          showConfirmButton: false,
          timer: 2000,
        });
      }
    }
  };

  return (
    <>
      <SectionTitle>Edit contact</SectionTitle>
      <Form onSubmit={handleSubmit} autoComplete="off">
        <FormLabel>
          Name
          <Input
            type="text"
            name="name"
            value={updatedName}
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
            value={updatedNumber}
            onChange={handleChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </FormLabel>
        <Button
          type="submit"
          disabled={!updatedName || !updatedNumber}
          variant="contained"
        >
          Submit
        </Button>
      </Form>
    </>
  );
}

EditForm.propTypes = {
  onClose: PropTypes.func.isRequired,
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};
