import { Form, FormBtn, FormLabel, Input } from 'components/Styles.styled';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerThunk } from 'redux/auth/authThunk';

export const SignUpForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(registerThunk({ name, email, password }));

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

      <FormBtn type="submit" disabled={!name || !email || !password}>
        Sign Up
      </FormBtn>
    </Form>
  );
};
