import connection from '../../database/connection';

class AlarmController {
  async update (request, response) {
    const { temperature } = request.body;
    
    await connection('alarm').update({
      temperature
    });

    return response.status(200).json({
      message: `'Alerta de temperatura alterado para ${temperature}`
    });
  }
}

export default new AlarmController();