import {
  HomeIcon,
  HomeLogoWrap,
  HomeTitle,
  InfoTitle,
} from 'components/Styles.styled';
import phoneIcon from '../images/phone-icon.png';
import { Helmet } from 'react-helmet';
import InteractiveList from 'components/HomeList/HomeList';
// import HowToRegIcon from '@mui/icons-material/HowToReg';
// import AddCircleIcon from '@mui/icons-material/AddCircle';
// import DeleteIcon from '@mui/icons-material/Delete';

const HomePage = () => {
  return (
    <div>
      <Helmet>
        <title>Phonebook</title>
      </Helmet>
      <HomeTitle>
        Welcome to
        <HomeLogoWrap>
          <HomeIcon src={phoneIcon} alt="phone icon" />
          <h2>Phonebook</h2>
          <hr />
        </HomeLogoWrap>
        <InfoTitle>A secure place to store your contacts</InfoTitle>
      </HomeTitle>
      <InteractiveList />
    </div>
  );
};

export default HomePage;
