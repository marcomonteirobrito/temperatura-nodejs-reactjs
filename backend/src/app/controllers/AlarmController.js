import connection from '../../database/connection';

class AlarmController {
  async index (request, response) {
    const newTemperatureAlarm = await connection('alarm').select('*');

    return response.status(200).json(newTemperatureAlarm);
  }

  async store (request, response) {
    const { newTemperatureAlarm } = request.body;
    
    await connection('alarm').insert({
      newTemperatureAlarm
    });

    return response.status(200).json({
      message: `'Alerta de temperatura definido para ${newTemperatureAlarm}`
    });
  }

  async update (request, response) {
    const { newTemperatureAlarm } = request.body;
    console.log(newTemperatureAlarm)
    await connection('alarm').update({
      newTemperatureAlarm
    });

    return response.status(200).json({
      message: `'Alerta de temperatura alterado para ${newTemperatureAlarm}`
    });
  }
}

export default new AlarmController();