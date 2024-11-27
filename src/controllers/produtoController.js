import produto from "../models/produto.js";

class produtoController {

    static listProducts = async (req, res) => {
        try {
            const listProducts = await produto.find({});
            res.status(200).json(listProducts);
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha na requisição` });
        }
    };

    static listProductById = async (req, res) => {
        try {
            const id = req.params.id;
            const productFound = await produto.findById(id);
            res.status(200).json(productFound);
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha na requisição` });
        }
    };

    static listProductByQuery = async (req, res) => {
        try {
            const { categoria, nome } = req.query;
            let products;

            if (categoria) {
                products = await produto.find({ categoria });
            } else if (nome) {
                products = await produto.find({ nome });
            } else {
                return res.status(400).json({ message: "Especifique 'categoria' ou 'nome' para busca." });
            }
            res.status(200).json(products);
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha na requisição` });
        }
    };

    static createProduct = async (req, res) => {
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

    static updateProduct = async (req, res) => {
        try {
            const id = req.params.id;
            await produto.findByIdAndUpdate(id, req.body);
            res.status(200).json({message: "Produto atualizado com sucesso!"});
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha na atualização do produto` });
        }
    };

    static deleteProduct = async (req, res) => {
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