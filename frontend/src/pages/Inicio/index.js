import React from 'react';

import Header from '../../components/Header';

import { Container, Main } from './styles';

function Inicio() {
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

export default Inicio;