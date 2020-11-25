import React from 'react';

import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import logoImg from '../../assets/logo.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Background, Content } from './styles';

const SignIn: React.FC = () => (
  <>
    <Container>
      <Content>
        <img src={logoImg} alt="Go Barber" />
        <form>
          <h1>Faça seu logon</h1>

          <Input icon={FiMail} name="email" type="text" placeholder="E-mail" />

          <Input
            icon={FiLock}
            name="password"
            type="password"
            placeholder="Senha"
          />

          <Button type="submit"> Entrar</Button>

          <a href="forgot">Esqueci minha senha</a>
        </form>

        <a href="newaccount">
          {' '}
          <FiLogIn size={16} /> Criar conta
        </a>
      </Content>
      <Background />
    </Container>
  </>
);

export default SignIn;
