import { Box, Button } from '@mui/material';
import { NavButton, NavList, NavListItem } from 'components/Styles.styled';
import PropTypes from 'prop-types';
import { NavLink, useNavigate } from 'react-router-dom';

export const Navigation = ({ pages }) => {
  const navigate = useNavigate();
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
              <NavButton
                to={path}
                // onClick={() => navigate(path)}
                // sx={{
                //   my: 2,
                //   color: 'rgba(66, 137, 254, 255)',
                //   display: 'block',
                //   fontSize: '20px',
                // }}
              >
                {name}
              </NavButton>
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
