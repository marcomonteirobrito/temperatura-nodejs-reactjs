import connection from '../../database/connection';

class HistoryController {
  async index (request, response) {
    const history = await connection('history').select('*');

    return response.json(history);
  }
}

export default new HistoryController();