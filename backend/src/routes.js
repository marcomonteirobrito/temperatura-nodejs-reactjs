import { Router } from 'express';

import AlarmController from './app/controllers/AlarmController';
import HistoryController from './app/controllers/HistoryController';
import TemperatureController from './app/controllers/TemperatureController';

const routes = new Router();

routes.get('/temperatura-historico', HistoryController.index);
routes.put('/temperatura-alarmes', AlarmController.update);
routes.post('/temperatura-alarmes', AlarmController.store);
routes.get('/temperatura-alarmes', AlarmController.index);
routes.get('/temperatura-atual', TemperatureController.index);

export default routes;