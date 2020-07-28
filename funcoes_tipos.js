
//funçao factory
function criarPokemon(nome, tipo, numeroDex, signatureMove, regiao="kanto"){
    return{
        nome,
        tipo,
        numeroDex,
        signatureMove,
        regiao

    }
}


//funçao construtora
function gerarPoke(nome, tipo){
    this.nome = nome
    this.tipo = tipo

    this.gritar = function() {
        console.log(" pikaaahhh ", this.nome)
    }
}

const pikachu = new gerarPoke("pikachu", "eletrico")
pikachu.gritar()



time = []

for (i = 0; i< 3; i++){
    time[i] = new criarPokemon("bulbasaur", "grama",i, "folha")
    //console.log(time[i])
}


//classe
class Pokemon{
    constructor(nome, tipo, regiao){
        this.nome = nome
        this.tipo = tipo
        this.regiao = regiao
    }

    gritar(){
        console.log("pikaaaaaaaaaaaaaaaahhhhhh")
    }

    exibirDados(){
        console.log("dados: ", this.nome, this.tipo, this.regiao)
    }
} 

pikachu = new Pokemon("pikachu", "eletrico", "kanto")
pikachu.exibirDados()
pikachu.gritar()
