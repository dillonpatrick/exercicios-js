const pessoa = {
  saudacao: "Bom dia",
  falar() {
    console.log(this.saudacao);    
  }
};

pessoa.falar()

const falaDePessoa = pessoa.falar.bind(pessoa)

falaDePessoa()
