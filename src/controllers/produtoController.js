import produto from "../models/produto.js";

class produtoController {

    static async listProducts(req, res){
        try {
            const listProducts = await produto.find({});
            res.status(200).json(listProducts);
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha na requisição` });
        }
    };

    static async listProductById(req, res){
        try {
            const id = req.params.id;
            const productFound = await produto.findById(id);
            res.status(200).json(productFound);
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha na requisição` });
        }
    };

    static async createProduct(req, res) {
         try {
            const novoProduto = await produto.create(req.body);
            res.status(201).json({
                message: "Produto cadastrado com sucesso!",
                produto: novoProduto
            });
         } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha ao cadastrar livro` });
         }
    };

    static async updateProduct(req, res){
        try {
            const id = req.params.id;
            await produto.findByIdAndUpdate(id, req.body);
            res.status(200).json({message: "Produto atualizado com sucesso!"});
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha na atualização do produto` });
        }
    };

    static async updateProduct(req, res){
        try {
            const id = req.params.id;
            await produto.findByIdAndUpdate(id, req.body);
            res.status(200).json({message: "Produto atualizado com sucesso!"});
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha na atualização do produto` });
        }
    };

    static async deleteProduct(req, res){
        try {
            const id = req.params.id;
            await produto.findByIdAndDelete(id);
            res.status(200).json({message: "Produto excluído com sucesso!"});
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha na exclusão do produto` });
        }
    };
};

export default produtoController;