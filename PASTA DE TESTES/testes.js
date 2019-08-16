const numeros = [11, 3, 52, 6, 7, 14, 888,90];

const num1 = numeros.map(function(n) {
  return n * 3;
});
console.log(num1);





const num2 = function(n) {
 console.log( 2 * n);
};
numeros.map(num2)
const soma10 = numeros =>numeros + 10;
console.log(numeros.map(soma10));


const maiorQueDez = numeros => numeros > 10;
console.log(numeros.filter(maiorQueDez));