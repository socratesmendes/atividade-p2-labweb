import mongoose from "mongoose";

const produtoSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    nome: { type: mongoose.Schema.Types.String, required: [true, "O nome do produto é obrigatório"]},
    descricao: { type: mongoose.Schema.Types.String, required: [true, "A descrição do produto é obrigatória"]},
    categoria: { type: mongoose.Schema.Types.String, required: [true, "A categoria do produto é obrigatória"]},
    marca: { type: mongoose.Schema.Types.String, required: [true, "A marca do produto é obrigatória"]},
    preco: { type: mongoose.Schema.Types.Number, required: [true, "O preço do produto é obrigatório"]},
    quantidadeEstoque: { type: mongoose.Schema.Types.Number, required: [true, "A quantidade em estoque do produto é obrigatória"]},
    codigoBarras: { type: mongoose.Schema.Types.String, required: [true, "O código de barras do produto é obrigatório"]},
    dimensoes: { type: mongoose.Schema.Types.Mixed, required: [true, "As dimensões do produto são obrigatórias"]},
    peso: { type: mongoose.Schema.Types.Mixed, required: [true, "O peso do produto é obrigatório"]},
    produtoStatus: { type: mongoose.Schema.Types.String, required: [true, "O status do produto é obrigatório"]},
    dataCadastro: { type: mongoose.Schema.Types.String, required: [true, "A data de cadastro do produto é obrigatória"]}
}, { versionKey: false });

const produto = mongoose.model("produtos", produtoSchema);

export default produto;