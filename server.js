const express = require('express');
const app = express();
const githubRoutes = require('./src/routes/githubRoutes');
const PORT = process.env.PORT || 4000;


app.use(express.json());


app.use('/api', githubRoutes);

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
