import { Button } from '@mui/material';
import {
  ButtonWrapper,
  Form,
  FormLabel,
  InfoMessage,
  Input,
} from 'components/Styles.styled';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { registerThunk } from 'redux/auth/authThunk';
import Swal from 'sweetalert2';

export const SignUpForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(registerThunk({ name, email, password }))
      .unwrap()
      .then(res => {
        navigate('/contacts');
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: `Welcome, ${res.user.name}!`,
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch(e => {
        Swal.fire({
          position: 'center',
          icon: 'error',
          text: `Error;( Try again or use another email to register`,
          confirmButtonColor: '#4289fe',
        });
      });

    setName('');
    setEmail('');
    setPassword('');
  };

  const handleChange = ({ target: { value, name } }) => {
    name === 'name'
      ? setName(value)
      : name === 'email'
      ? setEmail(value)
      : setPassword(value);
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <FormLabel>
        Name
        <Input type="text" name="name" value={name} onChange={handleChange} />
      </FormLabel>
      <FormLabel>
        Email
        <Input
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
        />
      </FormLabel>
      <FormLabel>
        Password
        <Input
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
        />
      </FormLabel>
      <ButtonWrapper>
        <Button
          type="submit"
          disabled={!name || !email || !password}
          variant="contained"
        >
          Sign Up
        </Button>
        <InfoMessage>Already have an account?</InfoMessage>
        <Button type="button" onClick={() => navigate('/login')} variant="text">
          Log in
        </Button>
      </ButtonWrapper>
    </Form>
  );
};
