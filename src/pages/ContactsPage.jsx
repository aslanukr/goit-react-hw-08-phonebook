import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { SectionTitle } from 'components/Styles.styled';

const ContactsPage = () => {
  return (
    <>
      <SectionTitle>Contacts</SectionTitle>
      <Filter />
      <ContactList />
    </>
  );
};
export default ContactsPage;
