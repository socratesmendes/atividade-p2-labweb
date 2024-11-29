import mongoose from "mongoose";

/* eslint-disable no-unused-vars */
function errorHandler(erro, req, res, next) {
    if (erro instanceof mongoose.Error.CastError) {
        res.status(400).send({ message: "Um ou mais dados fornecidos estão incorretos" });
    } else {
        res.status(500).send({ message: `${erro.message} - falha na requisição, erro interno do servidor` })
    }
};

export default errorHandler;