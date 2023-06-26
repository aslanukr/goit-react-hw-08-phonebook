import { Box } from '@mui/material';
import { NavButton, NavList } from 'components/Styles.styled';
import PropTypes from 'prop-types';

export const Navigation = ({ pages }) => {
  return (
    <>
      <Box
        sx={{
          flexGrow: 1,
          display: { xs: 'none', md: 'flex' },
          marginLeft: '10px',
        }}
      >
        <NavList>
          {pages.map(({ name, path }) => (
            <li key={name}>
              <NavButton to={path}>{name}</NavButton>
            </li>
          ))}
        </NavList>
      </Box>
    </>
  );
};

Navigation.propTypes = {
  pages: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
    })
  ).isRequired,
};
