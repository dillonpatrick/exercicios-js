function Pessoa() {
  this.idade= 2;

  const self = this; // o this tem valor constante (não importa que chama, o self sempre apontara para "Pessoa")
  setInterval(
    function() {
      self.idade++; //poderia ser o 'this' no lugar do 'self'
      console.log(self.idade);
    }.bind(self),
    1000
  );
}

new Pessoa();
