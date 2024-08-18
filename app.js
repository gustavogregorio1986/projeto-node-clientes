const express = require('express');
const path = require('path');
const app = express();

// Importar as rotas de cliente
const clienteRoutes = require('./routes/clienteRoutes');

// Usar as rotas
app.use('/api', clienteRoutes);

// Importar o banco de dados (Sequelize)
const db = require('./models/db');

// Testar a conexão com o banco de dados
db.sequelize.authenticate()
  .then(() => {
    console.log('Conexão com o banco de dados estabelecida com sucesso.');
  })
  .catch(err => {
    console.error('Não foi possível conectar ao banco de dados:', err);
  });

// Iniciar o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
