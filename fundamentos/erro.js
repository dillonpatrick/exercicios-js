function tratarErroELancar(erro) {
  //throw new Error('Erro')
  throw {
    nome: erro.name,
    msg: erro.message,
    date: new Date()
  };
}

function imprimeNomeGritado(obj) {
  try {
    console.log(obj.name.toUpperCase() + "!!!");
  } catch (e) {
    tratarErroELancar(e);
  } finally {
    console.log("Final");
  }
}

const obj = { nome: "Dillon" };
imprimeNomeGritado(obj);
