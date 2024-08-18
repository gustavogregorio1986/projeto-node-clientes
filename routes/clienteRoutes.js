const express = require('express');
const router = express.Router();
const clienteController = require('../controllers/clienteController');

router.post('/clientes/create', clienteController.create);
router.get('/api/clientes/listarAvioes', clienteController.listar);


module.exports = router;