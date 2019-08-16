function Pessoa() {
    this.idade = 2;
    this.nome='Joao'
  
    
    setInterval(() => {
        this.idade++;         
        console.log(this.idade);
      },
      1000
    );
  }
  
  new Pessoa
  