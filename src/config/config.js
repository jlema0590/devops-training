module.exports = {
  development: {
    port: process.env.PORT || 3000,
    corsOptions: {
      origin: '*'
    }
  },
  production: {
    port: process.env.PORT || 3000,
    corsOptions: {
      origin: process.env.ALLOWED_ORIGINS?.split(',') || []
    }
  }
}; 