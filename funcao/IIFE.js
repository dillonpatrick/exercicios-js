//IIFE (Immediately Invoked Function Expression) é uma função em JavaScript que é executada assim que definida.
(function() {
  console.log("Sera executado na hora!");
  console.log("foge do escopo mais abrangente");
})();

var result = (function() {
  var nome = "teste";
  return nome;
})();

console.log(result);
