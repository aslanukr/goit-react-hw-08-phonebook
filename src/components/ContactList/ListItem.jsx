import PropTypes from 'prop-types';
import { BiPhoneCall, BiTrash } from 'react-icons/bi';
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
import { selectIsLoading } from 'redux/selectors';
import Swal from 'sweetalert2';

export const ListItem = ({ contact }) => {
  const { id, name, number } = contact;

  const isLoading = useSelector(selectIsLoading);

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
        Swal.fire({
          title: `${name} has been deleted!`,
          icon: 'success',
          confirmButtonColor: '#4289fe',
        });
      }
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <ContactItem>
      <Name>{name}</Name>
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
  );
};

ListItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};
