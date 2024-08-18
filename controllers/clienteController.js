// controllers/clienteController.js
const clienteService = require('../services/clienteService')

exports.create = async (req, res) => {
    try {
        await clienteService.create(req.body);
        res.status(201).send('Avião criado com sucesso!');
    } catch (error) {
        console.error('Erro ao criar o avião:', error);
        res.status(500).send('Erro ao criar o avião.');
    }
};

exports.listar = (req, res) => {
    clienteService.listarClientes();
    res.send('Lista de aviões');
};
