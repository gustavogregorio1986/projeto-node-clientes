const Cliente = require('../models/cliente');

exports.create = async (req, res) => {
    try {
        await clienteService.create(req.body);
        res.status(201).send('Cliente criado com sucesso!');
    } catch (error) {
        console.error('Erro ao criar o cliente:', error);
        res.status(500).send('Erro ao criar o cliente.');
    }
};

async function listarClientes() {
    return await Cliente.findByAll();
}

module.exports = {
    listarClientes
}