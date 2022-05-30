const express = require('express')
const routerProduto = require('./routes/routerProduto')
let app = express();


app.get('/', (req, res) => res.send('Olá mundo!'));
app.get('/contatos', (req, res) => res.send('Pagina contatos'));

app.use('/produtos', routerProduto);
// Criando um servidor
app.listen(3000, () => console.log('Servidor rodando na porta 3000'))