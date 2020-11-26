/* eslint-disable @typescript-eslint/ban-types */
import React from 'react';

import { FiMail, FiLock, FiUser, FiArrowLeft } from 'react-icons/fi';
import { Form } from '@unform/web';
import logoImg from '../../assets/logo.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Background, Content } from './styles';

const SignUp: React.FC = () => {
  function handleSubmit(data: object): void {
    console.log(data);
  }

  return (
    <>
      <Container>
        <Background />
        <Content>
          <img src={logoImg} alt="Go Barber" />

          <Form onSubmit={handleSubmit}>
            <h1>Faça seu cadastro</h1>

            <Input icon={FiUser} name="name" type="text" placeholder="Nome" />

            <Input
              icon={FiMail}
              name="email"
              type="text"
              placeholder="E-mail"
            />

            <Input
              icon={FiLock}
              name="password"
              type="password"
              placeholder="Senha"
            />

            <Button type="submit"> Cadastrar</Button>
          </Form>

          <a href="newaccount">
            <FiArrowLeft size={16} /> Voltar para logon
          </a>
        </Content>
      </Container>
    </>
  );
};

export default SignUp;
