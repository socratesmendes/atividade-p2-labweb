import errorBase from "./errorBase.js";

class notFound extends errorBase {
    constructor(mensagem = "Página não encontrada") {
        super(mensagem, 404);
    }
}

export default notFound;