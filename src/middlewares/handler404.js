import notFound from "../erros/notfound.js";

function handler404 (req, res, next) {
    const erro404 = new notFound();
    next(erro404);
}

export default handler404;