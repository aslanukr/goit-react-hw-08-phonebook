import {
  Box,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
} from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logOutThunk } from 'redux/auth/authThunk';
import { selectEmail } from 'redux/selectors';
import { UserName, UserWrapper } from 'components/Styles.styled';

export const UserMenu = () => {
  // const userName = useSelector(selectName);
  const userEmail = useSelector(selectEmail);
  const [anchorElUser, setAnchorElUser] = useState(null);

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
        <UserWrapper>
          <Tooltip title="User menu">
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <AccountCircleIcon
                sx={{ fontSize: 25, color: 'rgba(66, 137, 254, 255)' }}
              />
              <UserName>{userEmail}</UserName>
            </IconButton>
          </Tooltip>
        </UserWrapper>
        <Menu
          sx={{ mt: '45px' }}
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
              dispatch(logOutThunk());
            }}
          >
            <Typography textAlign="center">Log Out</Typography>
          </MenuItem>
        </Menu>
      </Box>
    </>
  );
};