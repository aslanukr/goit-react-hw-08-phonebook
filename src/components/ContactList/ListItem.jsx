import PropTypes from 'prop-types';
import { BiPhoneCall, BiTrash } from 'react-icons/bi';
import EditIcon from '@mui/icons-material/Edit';
import {
  ContactItem,
  ContactWrapper,
  Name,
  PhoneWrapper,
} from 'components/Styles.styled';
import { useDispatch, useSelector } from 'react-redux';
import {
  deleteContactsThunk,
  getContactsThunk,
} from 'redux/contacts/contactsThunk';
import { selectContactsError, selectIsLoading } from 'redux/selectors';
import Swal from 'sweetalert2';
import { useState } from 'react';
import ModalEdit from 'components/Modal/ModalEdit';

export const ListItem = ({ contact }) => {
  const { id, name, number } = contact;

  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const handleEdit = () => {
    toggleModal(contact.id);
  };

  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectContactsError);

  const dispatch = useDispatch();

  const handleDelete = async () => {
    try {
      const result = await Swal.fire({
        icon: 'warning',
        title: 'Are you sure?',
        text: `You are about to delete ${name}`,
        showCancelButton: true,
        confirmButtonText: `Delete ${name}`,
        confirmButtonColor: 'red',
      });

      if (result.isConfirmed) {
        await dispatch(deleteContactsThunk(id));
        await dispatch(getContactsThunk());
        if (error) {
          Swal.fire({
            title: `Error!`,
            text: `${error}`,
            icon: 'error',
            confirmButtonColor: '#4289fe',
          });
          return;
        } else {
          Swal.fire({
            title: `${name} has been deleted!`,
            icon: 'success',
            confirmButtonColor: '#4289fe',
          });
        }
      }
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <>
      <ContactItem>
        <ContactWrapper>
          <EditIcon
            sx={{ fill: 'orange', fontSize: 'medium' }}
            type="button"
            cursor={'pointer'}
            onClick={handleEdit}
          />
          <Name>{name}</Name>
        </ContactWrapper>
        <ContactWrapper>
          <PhoneWrapper href={`tel:${number}`}>
            <BiPhoneCall color="rgba(66, 137, 254, 255)" />
            {number}
          </PhoneWrapper>
          <BiTrash
            type="button"
            name="delete"
            value={id}
            onClick={handleDelete}
            disabled={isLoading}
            cursor={'pointer'}
            color="red"
          />
        </ContactWrapper>
      </ContactItem>
      {showModal && (
        <ModalEdit onClose={toggleModal} contact={contact}></ModalEdit>
      )}
    </>
  );
};

ListItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};
