const pilotos = ["Alonso", "Vettel", "Massa", "Hamilton"];

console.log(pilotos);
pilotos.push("Rubinho");
console.log(pilotos);
pilotos.pop();
console.log(pilotos);

pilotos.shift(); //remove o primeiro elemento do array
console.log(pilotos);

pilotos.unshift("Senna"); //adiciona o elemento no primeiro indice do array
console.log(pilotos);

//adicionar
pilotos.splice(1, 0, "Rubinho", "Piquet"); 
console.log(pilotos);

//remover
pilotos.splice(2,1);
console.log(pilotos);

const algunsPilotos = pilotos.slice(2); //criar um novo array a partir do indice entre parentese
console.log(algunsPilotos);

