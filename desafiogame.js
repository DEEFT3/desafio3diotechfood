class ClasseDoGame  {
    constructor(nome,idade,tipo){
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }
    atacar(ataque){
        if(this.tipo === "guerreiro"){
            ataque = "usando espada"
        }
        else if(this.tipo === "mago"){
            ataque = "usando magia"
        }
        else if(this.tipo === "monge"){
            ataque = "usando punhos"
        }
        else if(this.tipo === "ninja"){
            ataque = "usando adaga"
        }
        return ataque
        
    }
    escrever() {
        const ataque = this.atacar()
        console.log(`o ${this.tipo} ${this.nome} atacou ${ataque}`);
    }
}

let jogo1 = new ClasseDoGame("Idril",170,"guerreiro")
jogo1.escrever()

