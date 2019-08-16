//factory simples
function criarPessoa() {
  return {
    nome: "Dillon",
    sobrenome: ""
  };
}

const pessoa = criarPessoa()
pessoa.nome='Claudio';
console.log(criarPessoa().nome)
console.log(pessoa.nome)
