import React from 'react';

import Header from '../../components/Header';

import { Container, Main } from './styles';

export default function Inicio() {
  return (
    <>
    <Header />
    <Container>
     <Main>
       <h1>Seja bem vindo!</h1>
       <p>Selecione no menu acima a opção desejada.</p>
     </Main>
    </Container>
    </>
  );
}

