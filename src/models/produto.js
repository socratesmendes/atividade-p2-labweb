import mongoose from "mongoose";

const produtoSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    nome: { type: mongoose.Schema.Types.String, required: true },
    descricao: { type: mongoose.Schema.Types.String, required: true },
    categoria: { type: mongoose.Schema.Types.String, required: true },
    marca: { type: mongoose.Schema.Types.String, required: true },
    preco: { type: mongoose.Schema.Types.Number, required: true },
    quantidadeEstoque: { type: mongoose.Schema.Types.Number, required: true },
    codigoBarras: { type: mongoose.Schema.Types.String, required: true },
    dimensoes: { type: mongoose.Schema.Types.Mixed, required: true },
    peso: { type: mongoose.Schema.Types.Mixed, required: true },
    produtoStatus: { type: mongoose.Schema.Types.String, required: true },
    dataCadastro: { type: mongoose.Schema.Types.String, required: true }
}, { versionKey: false });

const produto = mongoose.model("produtos", produtoSchema);

export default produto;