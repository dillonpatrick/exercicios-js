const pai = { nome: "Dillon", corCabelo: "castanho" };

const filha = Object.create(pai);
filha.nome = "Julia";
const filho = Object.create (pai);
filho.nome='jão'

console.log(filho.nome);
console.log(filha.corCabelo);

for (let key in filha) {
  filha.hasOwnProperty(key)
    ? console.log(`Sem Herança: ${key}`)
    : console.log(`Por heranca: ${key}`);
}
