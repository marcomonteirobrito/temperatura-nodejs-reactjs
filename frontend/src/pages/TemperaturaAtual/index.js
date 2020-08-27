import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

import api from '../../services/api';
import Header from '../../components/Header';

import { Container, Main } from './styles';

export default function TemperaturaAtual() {
  const [temperatura, setTemperatura] = useState('');

  useEffect(() => {
    api.get('temperatura-atual')
      .then(response => {
        toast.success('Temperatura aferida com sucesso');
        setTemperatura(response.data);
      }).catch(error => {
        toast.error('Falha na busca da temperatura, tente novamente');
      });
  }, []);

  function handleSubmit() {}
  return (
    <>
      <Header />
      <Container>
        <Main>
          <button onClick={handleSubmit}>Verificar temperatura atual</button>
          
        </Main>
      </Container>
    </>
  );
}

