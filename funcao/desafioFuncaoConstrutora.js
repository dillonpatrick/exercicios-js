// class pessoa {
//   constructor(nome) {
//     this.nome = nome;
//   }
//   falar() {
//     console.log(`Meu nome é ${this.nome}`);
//   }
// }

// const p1 = new pessoa("João");
// p1.falar();

//transformar o código acima em um construtor...

function pessoa2(nome) {
  this.nome = nome;
  this.getNomePessoa = function() {
    console.log(`Meu nome é ${this.nome}`);
  };
}

const p2 =new pessoa2("jose");
p2.getNomePessoa();
console.log(p2.nome)