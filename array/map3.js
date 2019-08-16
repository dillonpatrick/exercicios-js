Array.prototype.map2 = (function(callback){
    newArray = [];
    for (let i = 0; i < this.length; i++) {
        newArray.push(callback(this[i]))        
    }
    return newArray
})
const carrinho = [
  '{"nome":"Borracha", "preco":3.45}',
  '{"nome":"Caneta", "preco":1.50}',
  '{"nome":"Kit de Lapis", "preco":30.45}',
  '{"nome":"Caderno", "preco":10.20}'
];

const paraObjeto = json => JSON.parse(json);
const apenasPreco = produto => produto.preco;
const apenasNome = produto => produto.nome;

const resultado = carrinho.map2(paraObjeto).map2(apenasPreco);
const resultadoNome = carrinho.map2(paraObjeto).map2(apenasNome);

console.log(resultado);
console.log(resultadoNome);
