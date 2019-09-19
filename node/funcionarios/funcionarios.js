const url = "http://files.cod3r.com.br/curso-js/funcionarios.json";
const axios = require("axios");

const brasil = p => p.pais === "Brazil";
const mulheres = g => g.genero === "F";
const menorID = (funcId, IdAtual) =>{
    return funcId.id > IdAtual.id ? funcId : IdAtual
}
 

axios.get(url).then(response => {
  const funcionarios = response.data;
  const func = funcionarios.filter(brasil).filter(mulheres).reduce(menorID)
  console.log(func);
});

