const sequencia = {
  _valor: 1, // convenção usar o _ antes da variavel para uma variavel usada apenas dentro do obj
  get valor() {
    return this._valor++;
  },
  set valor(valor) {
    if (valor > this._valor) {
      this._valor = valor;
    }
  }
};

console.log(sequencia.valor, sequencia.valor);


