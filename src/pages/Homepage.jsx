import { HomeTitle } from 'components/Styles.styled';
import { Helmet } from 'react-helmet';

const HomePage = () => {
  return (
    <div>
      <Helmet>
        <title>Phonebook</title>
      </Helmet>
      <HomeTitle>
        <h3>Welcome to Phonebook!</h3>
        <p>Your secure place to store phone contacts</p>
      </HomeTitle>
    </div>
  );
};
export default HomePage;
