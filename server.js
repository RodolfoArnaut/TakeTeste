const express = require('express');
const app = express();
const githubRoutes = require('./src/routes/githubRoutes');
const PORT = process.env.PORT || 4000;


app.use(express.json());


app.use('/api', githubRoutes);

app._router.stack.forEach(function (r) {
    if (r.route && r.route.path) {
        console.log(`Rota ativa: ${r.route.path}`);
    }
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
