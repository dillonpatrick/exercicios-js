const produto = [
  { nome: "iphone", preco: 3999, fragil: true },
  { nome: "ipad", preco: 5000, fragil: true },
  { nome: "copo de plastico", preco: 3.99, fragil: false },
  { nome: "copo de vidro", preco: 7.99, fragil: true }
];

console.log(
  produto.filter(function(p) {
    return p.fragil == true && p.preco > 2500;
  })
);



const caro = produto => produto.preco >= 500;
const fragil = produto => produto.fragil;
const barato = produto => produto.preco <=10;

console.log(produto.filter(caro).filter(fragil));
console.log('--------------');
console.log(produto.filter(barato));

