const avo = { atrib1: "A" };
const pai = { __proto__: avo, atrib2: "B" };
const filho = { __proto__: pai, atrib3: "C" };

console.log(filho.atrib1, filho.atrib2, filho.atrib3);
console.log(avo.atrib2);

const carro = {
  velAtual: 0,
  velMax: 200,
  aceleramais(delta) {
    if (this.velAtual + delta <= this.velMax) {
      this.velAtual += delta;
    } else {
      this.velAtual = this.velMax;
    }
  },
  status() {
    return `${this.velAtual}KM/h de ${this.velMax}KM/h`;
  }
};

const ferrari = {
  modelo: "F40",
  velMax: 320
};
const volvo = {
  modelo: "V40",
  status() {
    return `${this.modelo}: ${super.status()}`;
  }
};

Object.setPrototypeOf(ferrari, carro);
Object.setPrototypeOf(volvo, carro);
ferrari.aceleramais(300);
volvo.aceleramais(20);
console.log(ferrari.status());
console.log(volvo.status());

