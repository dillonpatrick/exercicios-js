const carrinho = [
  '{"nome":"Borracha", "preco":3.45}',
  '{"nome":"Caneta", "preco":1.50}',
  '{"nome":"Kit de Lapis", "preco":30.45}',
  '{"nome":"Caderno", "preco":10.20}'
];

const paraObjeto = json => JSON.parse(json);
const apenasPreco = produto => produto.preco;
const apenasNome = produto => produto.nome;

const resultado = carrinho.map(paraObjeto).map(apenasPreco);
const resultadoNome = carrinho.map(paraObjeto).map(apenasNome);
console.log(resultado);
console.log(resultadoNome);
