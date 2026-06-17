const conexao = require('./src/database/conexao');

async function testarConexao() {
    try
    {
        const resultado = await conexao.query('SELECT 1 + 1 AS soma');

        console.log('Conexão com MySQL funcionando!');
        console.log(resultado[0]);

        process.exit();
    }
    catch(erro)
    {
        console.error('Erro ao conectar no MySQL:');
        console.error(erro.message);

        process.exit(1);
    }
}

testarConexao();
