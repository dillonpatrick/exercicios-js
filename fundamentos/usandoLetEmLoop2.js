const vetor = [];

for (let i = 0; i < 10; i++) {
  vetor.push(function() {
    console.log(i);
  });
}

vetor[9]();
vetor[0]();
console.log(vetor.length);
