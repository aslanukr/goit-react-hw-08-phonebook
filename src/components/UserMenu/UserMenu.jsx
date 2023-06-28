import { Box, Chip, Menu, MenuItem, Tooltip, Typography } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logOutThunk } from 'redux/auth/authThunk';
import { selectEmail } from 'redux/selectors';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

export const UserMenu = () => {
  const userEmail = useSelector(selectEmail);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleOpenUserMenu = event => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <>
      <Box sx={{ flexGrow: 0 }}>
        <Tooltip title="User menu">
          <Chip
            icon={<AccountCircleIcon />}
            sx={{ color: 'rgba(66, 137, 254, 255)' }}
            label={userEmail}
            onClick={handleOpenUserMenu}
          />
        </Tooltip>

        <Menu
          sx={{
            mt: '45px',
            '& .MuiMenuItem-root': {
              color: 'rgba(66, 137, 254, 255)',
            },
          }}
          id="menu-appbar"
          anchorEl={anchorElUser}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={Boolean(anchorElUser)}
          onClose={handleCloseUserMenu}
        >
          <MenuItem
            onClick={() => {
              handleCloseUserMenu();
              dispatch(logOutThunk())
                .unwrap()
                .then(() => {
                  navigate('/');
                  Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: `Logged out!`,
                    text: `Thank you for using our service!`,
                    showConfirmButton: false,
                    timer: 2500,
                  });
                });
            }}
          >
            <Typography textAlign="center">Log out</Typography>
          </MenuItem>
        </Menu>
      </Box>
    </>
  );
};
