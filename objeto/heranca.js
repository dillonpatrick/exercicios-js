const ferrari = {
  modelo: "f40",
  velMax: 320
};

const volvo = {
  modelo: "v40",
  velMax: 200
};

console.log(ferrari.__proto__);

console.log(ferrari.__proto__===volvo.__proto__);
