// ARMAZENANDO FUNCAO EM UMA VARIAVEL
const imprimeSoma = function(a, b) {
  console.log(a + b);
};
imprimeSoma(3, 8);

//ARAMAZENANDO FUNCAO ARROW EM UMA VARIAVEL
const soma = (a, b) => {
  return a + b;
};

//RETURN IMPLICITO
const subtracao = (a, b) => a - b;
console.log(subtracao(5, 4));
