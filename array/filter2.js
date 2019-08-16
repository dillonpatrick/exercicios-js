Array.prototype.filter2 = function(callback) {
  const novoArray = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      novoArray.push(this[i]);
    }
  }
  return novoArray;
};

const produto = [
  { nome: "iphone", preco: 3999, fragil: true },
  { nome: "ipad", preco: 5000, fragil: true },
  { nome: "copo de plastico", preco: 3.99, fragil: false },
  { nome: "copo de vidro", preco: 7.99, fragil: true }
];

const caro = produto => produto.preco >= 500;
const fragil = produto => produto.fragil;
const barato = produto => produto.preco <= 10;

console.log(produto.filter2(caro).filter2(fragil));
