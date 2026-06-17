const express = require('express');
const conexao = require('./src/database/conexao');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('API com MySQL funcionando');
});

app.get('/api/usuarios', async (req, res) => {
    try {
        const [usuarios] = await conexao.query(
            'SELECT * FROM usuarios'
        );

        res.json(usuarios);
    } catch (erro) {
        console.error(erro);
        res.status(500).json({
            erro: 'Erro ao buscar usuários'
        });
    }
});

app.get('/api/servicos', async (req, res) => {
    try {
        const [servicos] = await conexao.query(
            'SELECT * FROM servicos'
        );

        res.json(servicos);
    } catch (erro) {
        console.error(erro);
        res.status(500).json({
            erro: 'Erro ao buscar serviços'
        });
    }
});

app.get('/api/agendamentos', async (req, res) => {
    try {
        const [agendamentos] = await conexao.query(
            'SELECT * FROM agendamentos'
        );

        res.json(agendamentos);
    } catch (erro) {
        console.error(erro);
        res.status(500).json({
            erro: 'Erro ao buscar agendamentos'
        });
    }
});

app.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
});