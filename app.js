const express = require('express')
const rotasProdutos = require('./rotas/rotasProduto')
let app = express();


app.get('/', (req, res) => res.send('Olá mundo!'));
app.get('/contatos', rotasProdutos);

app.use('/produtos', rotasProdutos);
// Criando um servidor
app.listen(3000, () => console.log('Servidor rodando na porta 3000'))