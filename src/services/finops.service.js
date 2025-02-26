class FinOpsService {
    static async processMessage(to) {
      return {
        message: `Hola ${to} Este es un mensaje enviado desde la ruta /finops`
      };
    }
  }
  
  module.exports = FinOpsService; 