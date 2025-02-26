const express = require('express');
const router = express.Router();
const devOpsController = require('../controllers/devops.controller');
const finOpsController = require('../controllers/finops.controller');
// Ruta POST /DevOps
router.post('/', devOpsController.processMessage);

// Ruta GET /FinOps

router.get('/', finOpsController.processMessage)

// Manejar cualquier otro método HTTP en /DevOps
router.all('/', devOpsController.handleInvalidMethod);

router.all('/', finOpsController.handleInvalidMethod);

module.exports = router; 