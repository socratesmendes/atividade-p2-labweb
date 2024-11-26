import express from "express";

const app = express();
app.use(express.json());

const produtos = [
    {
        "id": "1",
        "nome": "Aspirador robô",
        "descricao": "Aspirador automático inteligente para limpeza de pisos.",
        "categoria": "Eletrônicos",
        "marca": "Marca Exemplo",
        "preco": 199.99,
        "quantidadeEstoque": 50,
        "codigoBarras": "7891234567890",
        "dimensoes": {
            "altura": 10.0,
            "largura": 20.0,
            "profundidade": 5.0,
            "unidadeMedida": "cm"
        },
        "peso": {
            "valor": 1.5,
            "unidadeMedida": "kg"
        },
        "status": "ativo",
        "dataCadastro": "2024-11-22T14:00:00Z"
    },
    {
        "id": "2",
        "nome": "Notebook Gamer",
        "descricao": "Notebook de alto desempenho com placa de vídeo dedicada.",
        "categoria": "Informática",
        "marca": "TechMaster",
        "preco": 3499.90,
        "quantidadeEstoque": 20,
        "codigoBarras": "7899876543210",
        "dimensoes": {
            "altura": 2.5,
            "largura": 35.0,
            "profundidade": 24.0,
            "unidadeMedida": "cm"
        },
        "peso": {
            "valor": 2.2,
            "unidadeMedida": "kg"
        },
        "status": "ativo",
        "dataCadastro": "2024-11-21T10:30:00Z"
    },
    {
        "id": "3",
        "nome": "Cafeteira Elétrica",
        "descricao": "Cafeteira com design compacto e timer programável.",
        "categoria": "Eletrodomésticos",
        "marca": "CoffeePlus",
        "preco": 129.99,
        "quantidadeEstoque": 100,
        "codigoBarras": "7894561237890",
        "dimensoes": {
            "altura": 30.0,
            "largura": 20.0,
            "profundidade": 15.0,
            "unidadeMedida": "cm"
        },
        "peso": {
            "valor": 1.8,
            "unidadeMedida": "kg"
        },
        "status": "ativo",
        "dataCadastro": "2024-11-23T08:00:00Z"
    }
];

function searchProduct(id) {
    return produtos.findIndex(produto => {
        return produto.id === id;
    });
}

app.get("/", (req, res) => {
    res.status(200).send("Atividade Final (p2) - Laboratorio de Desenvolvimento Web");
});

app.get("/produtos", (req, res) => {
    res.status(200).json(produtos);
});

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