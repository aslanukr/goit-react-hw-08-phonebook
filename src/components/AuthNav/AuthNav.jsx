import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export const AuthNav = () => {
  const navigate = useNavigate();
  return (
    <>
      <Button
        size="small"
        variant="outlined"
        onClick={() => navigate('/register')}
      >
        Sign Up
      </Button>
      <Button
        size="small"
        variant="contained"
        onClick={() => navigate('/login')}
      >
        Log in
      </Button>
    </>
  );
};
