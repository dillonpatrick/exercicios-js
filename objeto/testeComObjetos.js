function produto(nome, preco, desconto) {
  this.nome = nome;
  this.getPrecoComDesconto = function() {
    console.log(nome, (preco * (1 - desconto)).toFixed(3));
  };
}

const prod1 = new produto("Sabao", 4.5, 0.15);

prod1.getPrecoComDesconto();

//--------------------------------------------------
//Função que retorna um objeto

const fromJSON = JSON.parse('{"info" : "Sou um JSON"}');

console.log(fromJSON.info);

//--------------------------------------------------
//Função Factory
function criaFuncionario(nome, salarioBase, faltas) {
  return {
    nome,
    salarioBase,
    faltas,
    getSalario() {
      return (salarioBase / 20) * (20 - faltas);
    }
  };
}

const func1 = new criaFuncionario("jose", 1000, 1);
const func2 = new criaFuncionario("maria", 2000, 1);
console.log(func1.getSalario(), func2.getSalario());
