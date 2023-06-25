import { useDispatch, useSelector } from 'react-redux';
import { ListItem } from './ListItem';
import { List, Info } from 'components/Styles.styled';
import { selectVisibleContacts } from 'redux/selectors';
import { useEffect } from 'react';
import { getContactsThunk } from 'redux/contacts/contactsThunk';

export const ContactList = () => {
  const contacts = useSelector(selectVisibleContacts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContactsThunk());
  }, [dispatch]);

  return (
    <>
      <List>
        {contacts.length ? (
          contacts.map(({ id, name, number }) => (
            <ListItem key={id} contact={{ id, name, number }} />
          ))
        ) : (
          <>
            <Info>No contacts</Info>
          </>
        )}
      </List>
    </>
  );
};
