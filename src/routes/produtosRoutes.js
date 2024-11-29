import express from "express";
import produtoController from "../controllers/produtoController.js";

const routes = express.Router();

routes.get("/produtos", produtoController.listProducts);
routes.get("/produtos/busca", produtoController.listProductByQuery);
routes.get("/produtos/:id", produtoController.listProductById);
routes.post("/produtos", produtoController.createProduct);
routes.put("/produtos/:id", produtoController.updateProduct);
routes.delete("/produtos/:id", produtoController.deleteProduct);

export default routes;