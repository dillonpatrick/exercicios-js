function carro(velocidadeMaxima = 200, delta = 5) {
  //atributo privado
  let velocidadeAtual=0;  
  //metodo publico
  this.podeAcelerar = function() {
    if (velocidadeAtual + delta <= velocidadeMaxima) {
      velocidadeAtual += delta;
    } else {
      velocidadeAtual = velocidadeMaxima;
    }
  };

  this.getVelocidadeAtual = function() {
    return velocidadeAtual;
  };
}

const uno = new carro;
uno.podeAcelerar();
uno.podeAcelerar();
console.log(uno.getVelocidadeAtual());

const ferrari = new carro(90, 20);

ferrari.podeAcelerar();
ferrari.podeAcelerar();
ferrari.podeAcelerar();
ferrari.podeAcelerar();
ferrari.podeAcelerar();
ferrari.podeAcelerar();
console.log(ferrari.getVelocidadeAtual())