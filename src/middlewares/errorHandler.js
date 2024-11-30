import mongoose from "mongoose";
import errorBase from "../erros/errorBase.js";
import incorrectRequisition from "../erros/incorrectRequisition.js";
import validationError from "../erros/validationError.js";
import notFound from "../erros/notfound.js";

/* eslint-disable no-unused-vars */
function errorHandler(erro, req, res, next) {
    if (erro instanceof mongoose.Error.CastError) {
       new incorrectRequisition().sendResponse(res);
    } else if(erro instanceof mongoose.Error.ValidationError) {
        new validationError(erro).sendResponse(res);
    } else if(erro instanceof notFound) {
        erro.sendResponse(res);
    } else {
        new errorBase().sendResponse(res);
    }
};

export default errorHandler;