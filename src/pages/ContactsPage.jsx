import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { ContactsSectionWrapper, SectionTitle } from 'components/Styles.styled';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { useState } from 'react';
import { Tooltip } from '@mui/material';
import { Helmet } from 'react-helmet';
import ModalAdd from 'components/Modal/ModalAdd';

const ContactsPage = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };
  return (
    <>
      <Helmet>
        <title>Contacts=Phonebook=</title>
      </Helmet>
      <ContactsSectionWrapper>
        <SectionTitle>Contacts</SectionTitle>
        <Tooltip title="Add contact">
          <AddCircleIcon
            fontSize="large"
            aria-label="Add contact"
            onClick={toggleModal}
            sx={{ fill: 'rgba(66, 137, 254, 255)' }}
          />
        </Tooltip>
      </ContactsSectionWrapper>

      <Filter />
      <ContactList />
      {showModal && <ModalAdd onClose={toggleModal}></ModalAdd>}
    </>
  );
};
export default ContactsPage;
