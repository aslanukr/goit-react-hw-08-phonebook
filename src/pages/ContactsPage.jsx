import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import Modal from 'components/Modal/Modal';
import { ContactsSectionWrapper, SectionTitle } from 'components/Styles.styled';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { useState } from 'react';
import { Tooltip } from '@mui/material';
import { Helmet } from 'react-helmet';

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
      {showModal && <Modal onClose={toggleModal}></Modal>}
    </>
  );
};
export default ContactsPage;
