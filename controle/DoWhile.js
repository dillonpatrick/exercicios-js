function getValorAleatorio(min, max) {
  const valor = Math.random() * (max - min) + min;
  return Math.floor(valor);
}

let opcao = -1;

do {
  opcao = getValorAleatorio(-1, 10);
  console.log("Valor: ", opcao);
} while (opcao != -1);
console.log("Fim")
//---------------------------------------------//
