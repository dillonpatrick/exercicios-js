console.log(module.exports);
this.a = 1;
exports.b = 2;
module.exports.c = 3;

exports = {
  nome: "teste"
};

console.log(module.exports);
