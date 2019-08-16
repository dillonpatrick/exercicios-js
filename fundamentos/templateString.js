const nome = "Dillon";
const concantenacao = nome + " João " + "Silva";
console.log(concantenacao);

const template = `
    Bom dia, ${nome}`;
console.log(template);

console.log(`1+1 = ${1 + 1}`);

const up = texto => texto.toUpperCase();
console.log(`Ei... ${up("cuidado!")}`);
