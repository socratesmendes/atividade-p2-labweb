import incorrectRequisition from "./incorrectRequisition.js";

class validationError extends incorrectRequisition {
    constructor(erro) {
        console.log(erro.errors);
        const errorMessage = Object.values(erro.errors)
            .map(erro => erro.message)
            .join("; ");
        super(`Os seguintes erros foram encontrados: ${errorMessage}`);
    }
}

export default validationError;