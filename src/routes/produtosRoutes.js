import express from "express";
import produtoController from "../controllers/produtoController.js";

const routes = express.Router();

routes.get("/produtos", produtoController.listarProdutos);

export default routes;