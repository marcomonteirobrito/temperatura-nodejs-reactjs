import React, { useEffect, useState } from 'react';
import moment from 'moment';

import api from '../../services/api';
import Header from '../../components/Header';

import { Container, Main } from './styles';

export default function HistoricoTemperatura() {
  const [historico, setHistorico] = useState([]);
  const [status, setStatus] = useState('white');

  useEffect(() => {
    api.get('temperatura-historico')
      .then(response => {
        setHistorico(response.data);
      });
  }, []);

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
        <Main status={status}> 
          {historico.map(historicoTemperatura => (
            <li key={historicoTemperatura.id}>
              <div>
                <strong>Temperatura C°</strong>
                <p>{historicoTemperatura.temperature + '°'}</p>
              </div>

              <div>
                <strong>Status</strong>
                <p>{historicoTemperatura.status}</p>
              </div>

              <div>
                <strong>Data</strong>
                <p>{moment(historicoTemperatura.created_at).format('DD/MM/YYYY')}</p>
              </div>
            </li>
          ))}
        </Main>
      </Container>
    </>
  );
}
