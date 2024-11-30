import notFound from "../erros/notfound.js";
import produto from "../models/produto.js";

class produtoController {

    static listProducts = async (req, res, next) => {
        try {
            const listProducts = await produto.find({});
            res.status(200).json(listProducts);
        } catch (erro) {
            next(erro); 
        }
    };

    static listProductById = async (req, res, next) => {
        try {
            const id = req.params.id;
            const productFound = await produto.findById(id);

            if (productFound !== null) {
                res.status(200).json(productFound);
            } else {
                next(new notFound("Id do Produto não foi encontrado."));
            }
        } catch (erro) {
            next(erro);
        }
    };

    static listProductByQuery = async (req, res, next) => {
        try {
            const { categoria, nome } = req.query;

            const filters = {};
            if (nome) filters.nome = nome;
            if (categoria) filters.categoria = categoria;
    
            const productsFounds = await produto.find(filters);
            res.status(200).json(productsFounds);
        } catch (erro) {
            next(erro);
        }
    };

    static createProduct = async (req, res, next) => {
         try {
            const novoProduto = await produto.create(req.body);
            res.status(201).json({
                message: "Produto cadastrado com sucesso!",
                produto: novoProduto
            });
         } catch (erro) {
            next(erro);
         }
    };

    static updateProduct = async (req, res, next) => {
        try {
            const id = req.params.id;
            await produto.findByIdAndUpdate(id, req.body);
            res.status(200).json({message: "Produto atualizado com sucesso!"});
        } catch (erro) {
            next(erro);
        }
    };

    static deleteProduct = async (req, res, next) => {
        try {
            const id = req.params.id;
            await produto.findByIdAndDelete(id);
            res.status(200).json({message: "Produto excluído com sucesso!"});
        } catch (erro) {
            next(erro);
        }
    };
};

export default produtoController;