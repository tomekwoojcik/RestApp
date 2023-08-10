import { Input } from '@mui/material';
import { FC, useContext } from 'react';
import LoginPageContext from '../../context/loginPageContext';

const PasswordInput: FC = () => {
  const {  } = useContext(LoginPageContext);
  return (
    // eslint-disable-next-line arrow-parens
    <Input type="password" onChange={e => handleValue(e, setPasswordValue)} />
  );
}

export default PasswordInput;
