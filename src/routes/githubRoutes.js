const express = require('express');
const axios = require('axios');
const router = express.Router();


router.get('/repos/csharp', async (req, res) => {
    try {
        const org = 'takenet';
        const url = `https://api.github.com/orgs/${org}/repos`;

        const response = await axios.get(url);

        const csharpRepos = response.data.filter(repo => repo.language === 'C#');

        const sortedRepos = csharpRepos.sort((a, b) => new Date(a.created_at) - new Date(b.created_at));

        const top5Repos = sortedRepos.slice(0, 5).map(repo => ({
            name: repo.name,
            description: repo.description,
            created_at: repo.created_at,
            html_url: repo.html_url,
        }));

        res.status(200).json(top5Repos);
    } catch (error) {
        console.error('Erro ao buscar repositórios:', error.message);
        res.status(500).json({ error: 'Erro ao buscar os repositórios' });
    }
});

module.exports = router;
