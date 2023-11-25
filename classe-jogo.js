class heroi{
    constructor(nome, idade, tipo){
        this.nomeHeroi = nome
        this.idadeHeroi = idade
        this.tipoHeroi = tipo
    }

    atacar(){
        if (this.tipoHeroi === "mago") {
            console.log(`O ${this.tipoHeroi} ${this.nomeHeroi} atacou usando magia`)
        } else if (this.tipoHeroi === "guerreiro") {
            console.log(`O ${this.tipoHeroi} ${this.nomeHeroi} atacou usando espada`)
        } else if (this.tipoHeroi === "monge") {
            console.log(`O ${this.tipoHeroi} ${this.nomeHeroi} atacou usando artes marciais`)
        } else if (this.tipoHeroi === "ninja") {
            console.log(`O ${this.tipoHeroi} ${this.nomeHeroi} atacou usando shuriken`)
        }
    }
}

let heroi1 = new heroi("Gandalf",65, "mago")
let heroi2 = new heroi("Aragorn",37, "guerreiro")
let heroi3 = new heroi("Genkai",55, "monge")
let heroi4 = new heroi("Musashi",35, "ninja")

heroi1.atacar()
heroi2.atacar()
heroi3.atacar()
heroi4.atacar()