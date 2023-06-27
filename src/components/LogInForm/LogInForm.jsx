import { Form, FormBtn, FormLabel, Input } from 'components/Styles.styled';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginThunk } from 'redux/auth/authThunk';

import Swal from 'sweetalert2';

export const LogInForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(loginThunk({ email, password }))
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
          text: `Invalid email or password. Please, try again!`,
          showConfirmButton: false,
          timer: 1500,
        });
      });

    setEmail('');
    setPassword('');
  };

  const handleChange = ({ target: { value, name } }) => {
    name === 'email' ? setEmail(value) : setPassword(value);
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
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

      <FormBtn type="submit" disabled={!email || !password}>
        Log In
      </FormBtn>
    </Form>
  );
};
