const ProdutoController = {
    criarProduto: (req, res) => {
        res.send('Criando um produto');
    },
    deletarProduto: (req, res) => {
        const {id} = req.params;

        res.send("Deletando o produtor com id: "+ id)
    }
}

module.exports = ProdutoController