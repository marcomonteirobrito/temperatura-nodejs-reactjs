import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Inicio from './pages/Inicio';
import HistoricoTemperatura from './pages/HistoricoTemperatura';
import TemperaturaAtual from './pages/TemperaturaAtual';
import Alarme from './pages/Alarme';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Inicio} />
        <Route path="/temperatura-atual" component={TemperaturaAtual} />
        <Route path="/temperatura-historico" component={HistoricoTemperatura} />
        <Route path="/temperatura-alarmes" component={Alarme} />
      </Switch>
    </BrowserRouter>
  );
}