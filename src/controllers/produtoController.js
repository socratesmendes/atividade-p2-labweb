import produto from "../models/produto.js";

class produtoController {

    static async listarProdutos(req, res){
        const listaProdutos = await produto.find({});
        res.status(200).json(listaProdutos);
    }

    static async cadastrarProduto(req, res) {
         try {
            const novoProduto = await produto.create(req.body);
            res.status(201).json({ 
                messege: "Produto cadastrado com sucesso!", 
                produto: novoProduto 
            });
         } catch (erro) {
            res.status(500).json({ messege: `${erro.messege} - falha ao cadastrar livro` });
         } 
    }

};

export default produtoController;