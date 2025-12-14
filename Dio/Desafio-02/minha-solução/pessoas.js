class Pessoa {
    nome;
    peso;
    altura;
    constructor(nome, peso, altura) {
    //  Atributo  = Parametro do constructor
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }
    imc(peso, altura) {
        return console.log(`Meu IMC é ${(peso / (altura * altura)).toFixed(2)}`);
    }
}
new Pessoa('Emanuel', 75, 1.78).imc(75, 1.78);
// const p1 = new Pessoa('Emanuel', 75, 1.78);
// p1.imc(75, 1.78);
// console.log(result.toFixed(2));
