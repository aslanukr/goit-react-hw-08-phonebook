import { Icon, Logo } from 'components/Styles.styled';
import phoneIcon from '../../images/phone-icon.png';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { Navigation } from 'components/Navigation/Navigation';
import { AppBar, Container, Toolbar, Typography } from '@mui/material';
import { NavigationMenu } from 'components/Navigation/NavigationMenu';
import { useSelector } from 'react-redux';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { selectIsAuth } from 'redux/selectors';

const pages = [
  { name: 'Home', path: '/' },
  { name: 'Contacts', path: '/contacts' },
];

function ResponsiveAppBar() {
  const isAuth = useSelector(selectIsAuth);

  return (
    <AppBar position="fixed" sx={{ backgroundColor: 'white' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <NavigationMenu pages={pages} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="https://aslanukr.github.io/goit-react-hw-08-phonebook"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.1 rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            <Logo>
              <Icon src={phoneIcon} alt="phone icon" />
              <h1>Phonebook</h1>
            </Logo>
          </Typography>

          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            <Logo to={'/'}>
              <Icon src={phoneIcon} alt="phone icon" />
            </Logo>
          </Typography>

          <Navigation pages={pages} />

          {isAuth ? <UserMenu /> : <AuthNav />}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
