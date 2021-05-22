import React from 'react';
import Logo from '../../components/Logo';
import Form from '../../components/Form';
import { Background } from '../../styles/themes/background';

const Login: React.FC = () => {
  return <div>
    <Background>
      <Logo />
      <Form />
    </Background>
  </div>;
}

export default Login;