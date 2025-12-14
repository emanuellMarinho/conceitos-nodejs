class Carro {
    marca;
    cor;
    gastoMedioPorKM;
    // Quando eu sei quando a função construtura deve aparecer numa classe JS?
    constructor(marca, cor, gastoMedioPorKM) {
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioPorKM = gastoMedioPorKM;
    }
    calcularGastoDePercurso(distanciaEmKM, precoCombustivel) {
        return distanciaEmKM * this.gastoMedioPorKM * precoCombustivel;
    }
}
const uno = new Carro('Fiat', 'Prata', 1/12);
const result = uno.calcularGastoDePercurso(70, 5);
console.log(result.toFixed(2));