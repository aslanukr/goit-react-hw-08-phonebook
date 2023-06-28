import {
  HomeIcon,
  HomeLogoWrap,
  NotFoundTitle,
} from 'components/Styles.styled';
import phoneIcon from '../images/phone-icon.png';
import { Button } from '@mui/material';

const NotFound = () => {
  return (
    <NotFoundTitle>
      <HomeLogoWrap>
        <HomeIcon src={phoneIcon} alt="phone icon" />
        <h2>Phonebook</h2>
        <hr />
      </HomeLogoWrap>
      Oops, there is no such page on our website...
      <Button variant="contained" href="/">
        Go back to our Homepage
      </Button>
    </NotFoundTitle>
  );
};
export default NotFound;
