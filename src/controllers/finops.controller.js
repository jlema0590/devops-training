const FinOpsService = require('../services/finops.service');

class FinOpsController {
  static async processMessage(req, res) {
    try {
      const { message, to, from, timeToLifeSec } = req.body;

      // Validar que todos los campos requeridos estén presentes
      if (!message || !to || !from || !timeToLifeSec) {
        return res.status(400).json({ error: 'ERROR' });
      }

      const response = await FinOpsService.processMessage(to);
      res.status(200).json(response);
    } catch (error) {
      console.error('Error en processMessage:', error);
      res.status(500).json({ error: 'ERROR' });
    }
  }

  static handleInvalidMethod(req, res) {
    res.status(405).json({ error: 'ERROR' });
  }
}

module.exports = FinOpsController; 