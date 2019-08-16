function soma() {
  let soma = 0;
  for (i in arguments) {
    soma += arguments[i];
    console.log(soma)
}
}

soma()
soma(3,5,5,5,'teste')