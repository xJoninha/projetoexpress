const ProdutoController = {
    criarProduto: (req, res) => {
        res.send('Criando um produto!');
    },
    deletarProduto: (req, res) => {
        res.send('Produto deletado!')
    },
}

module.exports = ProdutoController