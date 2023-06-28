import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import ContactsIcon from '@mui/icons-material/Contacts';
import PublicIcon from '@mui/icons-material/Public';

function generate(data) {
  return data.map((item, index) => (
    <ListItem key={index}>
      <ListItemIcon>{item.icon}</ListItemIcon>
      <ListItemText primary={item.primary} secondary={item.secondary} />
    </ListItem>
  ));
}

const Wrapper = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

export default function InteractiveList() {
  const listItemsData = [
    {
      primary: 'Register',
      secondary: 'Sign up or log in',
      icon: <HowToRegIcon />,
    },
    {
      primary: 'Store contacts',
      secondary: 'add, edit or delete your contacts',
      icon: <ContactsIcon />,
    },
    {
      primary: 'Access your contacts from anywhere',
      secondary: '...of course, you need internet for that;)',
      icon: <PublicIcon />,
    },
  ];

  return (
    <Box
      sx={{
        flexGrow: 1,
        maxWidth: 752,
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Wrapper>
        <List>{generate(listItemsData)}</List>
      </Wrapper>
    </Box>
  );
}
