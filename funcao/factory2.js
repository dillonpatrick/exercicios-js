function criarProduto(nome, preco, desconto = 0.9) {
  if (preco >= 2000) {
    console.log(nome, (preco *= desconto));
  } else console.log(nome, preco);
}

criarProduto("Teclado", 100);
criarProduto("Carro", 2000);
