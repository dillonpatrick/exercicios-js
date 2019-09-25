const porta = 3003;

const express = require("express");

const app = express();

app.get("/produtos", (req, res, next) => {
  res.send({ nome: "celular", preco: 1234.56 });
});

app.listen(porta, () => {
  console.log(`Server está executando na porta ${porta}`);
});
''