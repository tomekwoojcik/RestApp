import { Input } from '@mui/material';
import { FC, useContext } from 'react';
import LoginPageContext from '../../context/loginPageContext';

const PasswordInput: FC = () => {
  const { handlePasswordInput } = useContext(LoginPageContext);
  return (
    // eslint-disable-next-line arrow-parens
    <Input type="password" onChange={handlePasswordInput} />
  );
}

export default PasswordInput;
