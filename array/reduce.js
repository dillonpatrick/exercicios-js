const alunos = [
  { nome: "Dillon", nota: 10, bolsista: false },
  { nome: "Allan", nota: 8.7, bolsista: false },
  { nome: "Amanda", nota: 9.3, bolsista: true }
];

//console.log(alunos.map(a=>a.nota));

const resultado = alunos
  .map(a => a.nota)
  .reduce(function(acumulador, atual) {
    //console.log(acumulador, atual);
    return acumulador + atual;
  },2);

  console.log(resultado);
