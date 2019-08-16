const alunos = [
  { nome: "Dillon", nota: 10, bolsista: true},
  { nome: "Allan", nota: 8.7, bolsista: false },
  { nome: "Amanda", nota: 9.3, bolsista: false }
];

const temBolsa = (resultado, bolsista) => resultado && bolsista;
console.log(alunos.map(a=>a.bolsista).reduce(temBolsa));
  
const temBolsa2 = (resultado, bolsista) => resultado || bolsista;
console.log(alunos.map(a=>a.bolsista).reduce(temBolsa2));

