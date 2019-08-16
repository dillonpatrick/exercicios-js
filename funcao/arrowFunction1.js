let dobro = function(a) {
  return 4 * a;
};
console.log(dobro(Math.PI));

dobro = a => {
  return 3 * a;
};
console.log(dobro(Math.PI));

dobro = a => 5 * a; //return implicito
console.log(dobro(Math.PI));
