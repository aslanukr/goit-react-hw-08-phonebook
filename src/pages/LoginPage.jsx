import { LogInForm } from 'components/LogInForm/LogInForm';
import { SectionTitle } from 'components/Styles.styled';
import { Helmet } from 'react-helmet';

const LoginPage = () => {
  return (
    <div>
      <Helmet>
        <title>Login=Phonebook=</title>
      </Helmet>
      <SectionTitle>Log in</SectionTitle>
      <LogInForm />
    </div>
  );
};
export default LoginPage;
