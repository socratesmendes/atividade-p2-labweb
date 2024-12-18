# Atividade Final de Implementação de API Rest

Este projeto é uma **API Restful** desenvolvida em **Node.js** utilizando o framework **Express**, com integração ao banco de dados **MongoDB**. Ele foi desenvolvido como parte do exercício final da disciplina **Laboratório de Desenvolvimento Web da Fatec Franca**, no curso de **Desenvolvimento de Software Multiplataforma**.

---

## Informações Gerais  

- **Curso:** Desenvolvimento de Software Multiplataforma;
- **Disciplina:** Laboratório de Desenvolvimento Web;
- **Instituição:** Faculdade de Tecnologia - Fatec Franca;
- **Objetivo:** Implementar uma API para gerenciar produtos, explorando rotas REST e integração com banco de dados MongoDB;

> [!IMPORTANT]  
> - No projeto enviado pelo teams, tinha um atributo chamado <i>"status"</i>.
> - Tal nome do atributo é uma palavra reservada.
> - Para evitar qualquer conflito, alterei para o nome para <i>"produtoStatus"</i>.
> - Segue print:

![image](https://github.com/user-attachments/assets/16a02e62-6e08-41bc-a433-e04fd1a14fb6)

---

## Funcionalidades  

### CRUD de Produtos  
- **Create:** Adicionar novos produtos;
- **Read:** Visualizar todos os produtos ou buscar por ID;
- **Update:** Atualizar dados de um produto existente;
- **Delete:** Remover produtos;

### Banco de Dados MongoDB  
- Os dados dos produtos são armazenados e gerenciados por um banco **MongoDB**.   

---

## Como executar o projeto  

### Pré-requisitos

> [!NOTE]
> Certifique-se de ter instalado em sua máquina:
> - **Node.js** (v16 ou superior)
> - **npm** (ou **yarn**) para gerenciar dependências
> - **MongoDB** em execução (local ou remoto) 

### Clone o repositório:
```bash
git clone <URL_DO_REPOSITORIO>
cd <NOME_DA_PASTA>
```

### Instale as dependências:
```bash
npm install
```

### Instale as dependências:
```bash
npm run dev
```

### Testando a API:
- Acesse `http://localhost:3000` no navegador ou use ferramentas como Postman ou Insomnia para testar as rotas.
