class DevOpsService {
  static async processMessage(to) {
    return {
      message: `Hello ${to} your message will be sent`
    };
  }
}

module.exports = DevOpsService; 