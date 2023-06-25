import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import phoneIcon from '../images/phone-icon.png';
import {
  Container,
  Logo,
  Icon,
  SectionTitle,
  Wrapper,
  SpinnerOverlay,
  SpinnerContainer,
} from './Styles.styled';
import { useSelector } from 'react-redux';
import { selectIsLoading } from 'redux/selectors';
import { Oval } from 'react-loader-spinner';

export default function App() {
  const isLoading = useSelector(selectIsLoading);
  return (
    <Container>
      <Logo href="">
        <Icon src={phoneIcon} alt="phone icon" />
        <h1>Phonebook</h1>
      </Logo>
      <ContactForm />
      <Wrapper>
        <SectionTitle>Contacts</SectionTitle>
        <Filter />
      </Wrapper>
      <ContactList />

      {isLoading && (
        <SpinnerOverlay>
          <SpinnerContainer>
            <Oval
              height={80}
              width={80}
              color="#4289fe"
              visible={true}
              ariaLabel="oval-loading"
              secondaryColor="#96BEFF"
              strokeWidth={2}
              strokeWidthSecondary={2}
            />
          </SpinnerContainer>
        </SpinnerOverlay>
      )}
    </Container>
  );
}
