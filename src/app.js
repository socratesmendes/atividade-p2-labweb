import express from "express";
import connectDB from "./config/dbConnect.js";
import routes from "./routes/index.js";

const dbConnect = await connectDB();

dbConnect.on("error", (erro) => {
    console.error("Erro de conexão...", erro);
});

dbConnect.once("open", () => {
    console.log("Conexão com o banco feita com sucesso!")
});

const app = express();
routes(app);

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