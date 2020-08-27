import React from 'react';
import { Link } from 'react-router-dom';
import { FiThermometer } from 'react-icons/fi';
import { MdAlarm, MdHistory } from 'react-icons/md';

import { Container } from './styles';

export default function Header() {
  return (
    <Container>
      <nav>
          <Link to='/temperatura-atual'>
            <span>
              <FiThermometer />
            </span>
            <strong>Temperatura Atual</strong>
          </Link>
  
          <Link to='/temperatura-historico'>
            <span>
              <MdHistory />
            </span>
            <strong>Histórico de Temperatura</strong>
          </Link>

          <Link to='/temperatura-alarmes'>
            <span>
              <MdAlarm />
            </span>
            <strong>Alarme</strong>
          </Link>
      </nav>
  </Container>
  );
  
}