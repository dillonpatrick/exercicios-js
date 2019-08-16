const soma = function(a, b) {
  return a + b;
};

const imprimirResultado = function(x, y, operacao = soma) {
  console.log(operacao(x, y));
};

imprimirResultado(4, 6);

console.log(soma(4, 7));

imprimirResultado(5, 4, function(x, y) {
  return x - y;
});

imprimirResultado(5, 2, (a, b) => a * b); // arrow function sempre é anonimo

const pessoa = {
    falar : function () {
        console.log('opa');
    }
}

pessoa.falar()



const pessoa2 = {
    falar() {
        console.log('Olá');
    }
}

pessoa2.falar()
