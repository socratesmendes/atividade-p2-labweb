import express from "express";
import connectDB from "./config/dbConnect.js";
import routes from "./routes/index.js";
import errorHandler from "./middlewares/errorHandler.js";

const dbConnect = await connectDB();

dbConnect.on("error", (erro) => {
    console.error("Erro de conexão...", erro);
});

dbConnect.once("open", () => {
    console.log("Conexão com o banco feita com sucesso!")
});

const app = express();
app.use(express.json())
routes(app);

// eslint-disable-next-line no-unused-vars
app.use(errorHandler);

export default app;