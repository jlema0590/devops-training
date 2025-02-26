const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(helmet());
app.use(express.json());

// Importar rutas
const devOpsRoutes = require('./routes/devops.routes');

// Rutas
app.use('/DevOps', devOpsRoutes);
app.use('/FinOps', devOpsRoutes)

// Rutas básicas
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'OK' });
});

// Manejo de errores
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'ERROR' });
});

app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`);
});

module.exports = app; 