function pulaLinha() {
  console.log("----------------------------------");
}

pulaLinha();

function TamanhoArea(altura, largura) {
  const area = altura * largura;
  if (area > 20) {
    console.log(`Tamanho acima do permitido: ${area}m²`);
  } else {
    console.log(area);
  }
}
TamanhoArea(5, 5);

pulaLinha();

function TamanhoArea2(altura, largura) {
  const area = altura * largura;
  if (area > 20) {
    console.log(`Tamanho acima do permitido: ${area}m²`);
  } else {
    console.log(`Area = ${area}m²`);
    
  }
  
}
//console.log(`Valor ${TamanhoArea2(4, 5)}`);
TamanhoArea2(4,5);
