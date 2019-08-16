//FUNCAO SEM RETORNO

function imprimeSoma(a, b) {
  console.log("Soma = " + a + b);
}
imprimeSoma(3, 4);

function raizQuad(a) {
  console.log("Raiz = " + Math.sqrt(a));
}
raizQuad(102);

//FUNCAO COM RETORNO
function soma(a, b = 0) {
  return a + b;
}
console.log(soma(1));

function quadrado(a) {
  return a * a;
}
console.log(quadrado(12));

function raizQuadrada(a) {
  return Math.sqrt(a).toFixed(2);
}
console.log(raizQuadrada(16));
