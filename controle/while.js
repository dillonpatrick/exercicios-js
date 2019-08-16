function getValorAleatorio (min, max) {
  const valor = Math.random() * (max - min) + min;
  return Math.floor(valor);
}

let opcao

while (opcao != -1) {
    opcao = getValorAleatorio(-1, 10)
    console.log('Valor: ',opcao )
}
console.log('Fim')
//---------------------------------------------//


