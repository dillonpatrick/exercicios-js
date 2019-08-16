const aprovados = ["Dillon", "Patrick", "Allan", "Allana", "Amanda", "Celina"];
aprovados.forEach(function(nome, indice) {
  console.log(`${indice + 1}) ${nome}`);
});
aprovados;

const exibirAprovados = aprovados => console.log(aprovados);
aprovados.forEach(exibirAprovados)