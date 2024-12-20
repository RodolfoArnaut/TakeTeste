<<<<<<< HEAD
const express = require('express');
const app = express();
const githubRoutes = require('./src/routes/githubRoutes'); // Certifique-se de que este caminho está correto
const PORT = process.env.PORT || 4000;

// Middleware para JSON
app.use(express.json());

// Middleware para logar todas as solicitações da API
app.use((req, res, next) => {
    console.log(`Recebida solicitação: ${req.method} ${req.originalUrl}`);
    next();
});

// Rotas de API
app.use('/api', githubRoutes);

// Servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
=======
const express = require('express');
const app = express();
const githubRoutes = require('./src/routes/githubRoutes'); // Certifique-se de que este caminho está correto
const PORT = process.env.PORT || 4000;

// Middleware para JSON
app.use(express.json());

// Middleware para logar todas as solicitações da API
app.use((req, res, next) => {
    console.log(`Recebida solicitação: ${req.method} ${req.originalUrl}`);
    next();
});

// Rotas de API
app.use('/api', githubRoutes);

// Servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
>>>>>>> b0f64481eff56e7b975454a5b98682c1ea045b87
