class personagem{
    constructor(pnome, pidade, ptipo){
        this.nome = pnome;
        this.idade = pidade;
        this.tipo = ptipo;

        if(ptipo === "guerreiro"){
            this.tipoAtaque = "espada";
        }else if(ptipo === "mago"){
            this.tipoAtaque = "magia";
        }else if(ptipo === "monge"){
            this.tipoAtaque = "artes marciais";
        }else if(ptipo === "ninja"){
            this.tipoAtaque = "shuriken";
        }else{
            this.tipo = "sem classe";
            this.tipoAtaque = "nada";
        }
    }
    atacar(){
        console.log(`O ${this.tipo} atacou usando ${this.tipoAtaque}`);
    }
}

let p1 = new personagem("Luan", 37, "guerreiro");
let p2 = new personagem("Astrobaldo", 44, "mago");
let p3 = new personagem("Pancadeiro", 32, "monge");
let p4 = new personagem("BemBrabão", 28, "ninja");
let p5 = new personagem("SóPancada", 41, "doido");

console.log("---------------");
p1.atacar();
console.log("---------------");
p2.atacar();
console.log("---------------");
p3.atacar();
console.log("---------------");
p4.atacar();
console.log("---------------");
p5.atacar();