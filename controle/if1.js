function avaliacao(nota) {
  if (nota >= 7) {
    console.log("aprovado");
  } else {
    console.log("reprovado");
  }
}
avaliacao(6.9);
//-----------------------------------------------------------//
function avaliacao2(nota1, nota2) {
  result = nota1 + nota2;
  if (result >= 7) {
    console.log("aprovado");
  } else {
    console.log("reprovado");
  }
  return result;
}
console.log(avaliacao2(3.4, 5.6));
//-----------------------------------------------------------//
const avaliacao3 = avaliacao;
avaliacao3(5);
//-----------------------------------------------------------//

function condicao(nota) {
  if (nota <= 10 && nota >= 8.5) {
    console.log("Parabéns! Aprovado!");
  } else if (nota < 8.5 && nota >= 7) {
    console.log("Poderia ser melhor");
  } else if (nota < 7) {
    console.log("Reprovado");
  }
  else{
    console.log('Valor incorreto')
  }
}
condicao(12);
//-----------------------------------------------------------//

Number.prototype.entre = function(inicio, fim) {
  return this >= inicio && this <= fim;
};

const imprimeResultado = function(nota) {
  if (nota.entre(9, 10)) {
    console.log("Quadro de honra");
  } else if (nota.entre(7, 8.99)) {
    console.log("Aprovado");
  } else if (nota.entre(0, 6.99)) {
    console.log("reprovado");
  } else {
    console.log("Nota invalida");
  }
};
imprimeResultado(8.99);
