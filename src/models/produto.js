import mongoose from "mongoose";

const produtoSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    nome: { type: mongoose.Schema.Types.String },
    descricao: { type: mongoose.Schema.Types.String },
    categoria: { type: mongoose.Schema.Types.String },
    marca: { type: mongoose.Schema.Types.String },
    preco: { type: mongoose.Schema.Types.Number },
    quantidadeEstoque: { type: mongoose.Schema.Types.Number },
    codigoBarras: { type: mongoose.Schema.Types.String },
    dimensoes: { type: mongoose.Schema.Types.Mixed },
    peso: { type: mongoose.Schema.Types.Mixed },
    produtoStatus: { type: mongoose.Schema.Types.String },
    dataCadastro: { type: mongoose.Schema.Types.String }
}, { versionKey: false });

const produto = mongoose.model("produtos", produtoSchema);

export default produto;