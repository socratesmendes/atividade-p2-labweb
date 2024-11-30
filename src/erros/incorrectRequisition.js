import errorBase from "./errorBase.js";

class incorrectRequisition extends errorBase{
    constructor (mensagem = "um ou mais dados fornecidos estão incorretos") {
        super(mensagem, 400);
    }
}

export default incorrectRequisition;