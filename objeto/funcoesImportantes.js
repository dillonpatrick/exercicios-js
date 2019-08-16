const pessoa = {
  nome: "Dillon",
  idade: 24,
  peso: 65
};

console.log(Object.keys(pessoa)); // exibe o nome de todas as variares de um objeto

console.log(Object.values(pessoa));

console.log(Object.entries(pessoa));

Object.entries(pessoa).forEach(([chave, valor]) => {
  console.log(`${chave}: ${valor}`);
});
