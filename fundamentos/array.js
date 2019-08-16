const valoresArray = [2.4, 5.8, 6.3, 8.1, 9.9];
console.log(valoresArray[0] * valoresArray[3]);

valoresArray[5] = 34.5;
console.log(valoresArray);

valoresArray[13] = 4.9;
console.log(valoresArray);

valoresArray.push({ id: 1 }, false, null, "teste");
console.log(valoresArray);

console.log(valoresArray.pop()); //remove o ultimo valor do array;
delete valoresArray[2];

console.log(valoresArray);
