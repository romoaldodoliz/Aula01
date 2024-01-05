// Exercicios lista de objectos

class Carro{
    marca;
    cor;
    gastoMedioPorKm;

    constructor(marca, cor, gastoMedioPorKm){
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioPorKm = gastoMedioPorKm;
    }
}
const uno = new Carro('VW', 'gray', 1/12)
console.log(uno);