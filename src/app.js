import express from "express";
import connectDB from "./config/dbConnect.js";
import produto from "./models/produto.js";

const dbConnect = await connectDB();

dbConnect.on("error", (erro) => {
    console.error("Erro de conexão...", erro);
});

dbConnect.once("open", () => {
    console.log("Conexão com o banco feita com sucesso!")
});

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
    res.status(200).send("Atividade Final (p2) - Laboratorio de Desenvolvimento Web");
});

app.get("/produtos", async (req, res) => {
    const listaProdutos = await produto.find({});
    res.status(200).json(listaProdutos);
});

app.get("/produtos/:id", (req, res) => {
    const index = searchProduct(req.params.id);
    res.status(200).json(produtos[index]);
});

app.post("/produtos", (req, res) => {
    produtos.push(req.body);
    res.status(201).send("Produto cadastrado com sucesso!")
});

app.put("/produtos/:id", (req, res) => {
    const index = searchProduct(req.params.id);
    produtos[index].nome = req.body.nome;
    res.status(200).json(produtos[index]);
});

app.delete("/produtos/:id", (req, res) => {
    const index = searchProduct(req.params.id);
    produtos.splice(index, 1);
    res.status(200).send("Produto removido com sucesso.");
});

export default app;