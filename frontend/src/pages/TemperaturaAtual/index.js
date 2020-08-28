import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { FiThermometer } from 'react-icons/fi';

import api from '../../services/api';
import Header from '../../components/Header';

import { Container, Main, Button, Temperature, Status } from './styles';

export default function TemperaturaAtual() {
  const [currentTemperature, setCurrentTemperature] = useState('');
  const [status, setStatus] = useState('white');

  async function handleGetTemperature(event) {
    event.preventDefault();

    await api.get('temperatura-atual')
      .then(response => {
        toast.success('Temperatura aferida com sucesso');
        setCurrentTemperature(response.data);
        colorStatus(response.data.status);
      }).catch(error => {
        toast.error('Falha na busca da temperatura, tente novamente');
      });
  }

  function colorStatus(statusVerify) {
    if(statusVerify === 'Arriscado') {
      setStatus('red');
    } else if (statusVerify === 'Alerta') {
      setStatus('yellow');
    } else {
      setStatus('green');
    }
  }

  return (
    <>
      <Header />
      <Container>
        <Main>
            <Temperature>
              <label>Temperatura Atual</label>
              <span>{currentTemperature ? currentTemperature.temperature + '°' : ''}</span>
            </Temperature>
            
            <Status status={status}>
              <label>Status</label>
              <span>{currentTemperature.status}</span>
            </Status>

            <Button onClick={handleGetTemperature}>
            <span>
              <FiThermometer />
            </span>
            <strong>Verificar temperatura atual</strong>
          </Button>
        </Main>
      </Container>
    </>
  );
}

