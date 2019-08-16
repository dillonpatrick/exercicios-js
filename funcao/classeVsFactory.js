class pessoa{
    constructor(nome){
         this.nome=nome;
    }
    falar(){
        console.log(`Meu nome é ${this.nome}`);
          
    }
}

const p1 = new pessoa('João');
p1.falar()