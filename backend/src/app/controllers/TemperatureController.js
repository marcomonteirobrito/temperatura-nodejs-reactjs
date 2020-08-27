import connection from '../../database/connection';

class TemperatureController {
  async index (request, response) {
    function temperatureAleatory(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
       return Math.floor(Math.random() * (max - min + 1) + min);
    }

    async function insertHistory(temperature, status) {
      await connection('history').insert({
        temperature,
        status
      });
    }

    const temperature = temperatureAleatory(17,28);
    
    if (temperature > 20 && temperature < 25) {
      const status = 'Alerta';

      insertHistory(temperature, status);

      return response.json({
        temperature,
        status
      });
      
    } else if (temperature <= 20) {
      const status = 'OK';

      insertHistory(temperature, status);

      return response.json({
        temperature,
        status
      });

    } else {
      const status = 'Arriscado';

      insertHistory(temperature, status);

      return response.json({
        temperature,
        status
      });
    }

  }
}

export default new TemperatureController();