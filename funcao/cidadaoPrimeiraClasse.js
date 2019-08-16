//cria  de forma literal
function fun1() {}

//armazenar em uma variavel
const fun2 = function() {};

//armazenar em um array
const array = [
  function fun3(a, b) {
    return a + b;
  },
  fun1,
  fun2
];

//armazenar em um atributo de objeto
const obj = {};
obj.falar = function() {
  return "Opa";
};
console.log(obj.falar());

//passar funcao como parametro
function run(fun) {
  fun();
}
run(function() {
  console.log("excecutando...");
});

//uma funcao pode retornar/conter uma funcao
function soma(a, b) {
  return function(c) {
    console.log(a + b + c);
  };
}

soma(3,3)(4)
//ou
const add = soma(3,5);
add(4);