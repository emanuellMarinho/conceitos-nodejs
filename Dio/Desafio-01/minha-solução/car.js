class Carro {
	// Atributos
	marca;
	cor;
	combustivel;
	
	// Construtor
	constructor(marca, cor, combustivel) {
		this.marca = marca;
		this.cor = cor;
		this.combustivel = combustivel;
	}
	
	// Métodos
	custoViagem(distancia, precoCombustivel) {
		const valorGasto = distancia * this.combustivel * precoCombustivel;
		return console.log(`O custo da viagem é R$${valorGasto.toFixed(2)}`);
	}
}

const car = new Carro('Ferrari', 'Vermelha', 0.1);
car.custoViagem(100, 5.25);
