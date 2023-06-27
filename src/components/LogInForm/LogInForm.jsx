import { Form, FormBtn, FormLabel, Input } from 'components/Styles.styled';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginThunk } from 'redux/auth/authThunk';
import { selectAuthError, selectName } from 'redux/selectors';
import Swal from 'sweetalert2';

export const LogInForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const userName = useSelector(selectName);
  const error = useSelector(selectAuthError);

  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(loginThunk({ email, password }))
      .unwrap()
      .then(() => {
        navigate('/contacts');
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: `Welcome, ${userName}!`,
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch(() => {
        Swal.fire({
          position: 'center',
          icon: 'error',
          text: `${error}!`,
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
