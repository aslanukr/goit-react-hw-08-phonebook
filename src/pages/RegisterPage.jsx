import { SignUpForm } from 'components/SignUpForm/SignUpForm';
import { SectionTitle } from 'components/Styles.styled';
import { Helmet } from 'react-helmet';

const RegisterPage = () => {
  return (
    <div>
      <Helmet>
        <title>SignUp=Phonebook=</title>
      </Helmet>
      <SectionTitle>Sign Up</SectionTitle>
      <SignUpForm />
    </div>
  );
};

export default RegisterPage;
