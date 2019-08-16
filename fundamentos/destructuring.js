const pessoa = {
  nome: "Dillon",
  idade: 26,
  endereco: {
    rua: "Jorge Buoni",
    numero: 126
  }
};

const {
  nome,
  idade,
  endereco: { rua, numero }
} = pessoa;

console.log(nome);
console.log(idade);
console.log(rua);
console.log(numero);

//--------------------------------------------------------------------//

let x = [1, 2, 3, 4, 5];
let [, y, z] = x;
console.log(y); // 2
console.log(z); // 3

//--------------------------------------------------------------------//

function rand([min = 0, max = 1000]) {
  if (min > max) [min, max] = [max, min];
  const valor = Math.random() * (max - min) + min;
  return Math.floor(valor);
}

console.log(rand([12, 15]));
console.log(rand([, 15]));
console.log(rand([12]));
