import { SectionTitle } from 'components/Styles.styled';
import { Helmet } from 'react-helmet';

const HomePage = () => {
  return (
    <div>
      <Helmet>
        <title>Phonebook</title>
      </Helmet>
      <SectionTitle>
        Welcome to Phonebook! <br />A secure place to store your contacts
      </SectionTitle>
    </div>
  );
};
export default HomePage;
