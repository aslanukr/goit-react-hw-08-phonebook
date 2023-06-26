import { Form, FormBtn, FormLabel, Input } from 'components/Styles.styled';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginThunk } from 'redux/auth/authThunk';

export const LogInForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(loginThunk({ email, password }));

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
