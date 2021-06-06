/**
 * -Crie uma classe que simule um carro;
 * -Propriedades: marca, cor, gasolina restante;
 * -Crie um método de dirigir o carro, que vá diminuindo a gasolina gradativamente;
 * -E um de abastecer para aumentar a gasolina quando necessário;
 */
class Car {
    constructor(mark, color, remainingGasoline, kilometersPerLiter, gasCost){
        this.mark = mark,
        this.color = color,
        this.remainingGasoline = remainingGasoline,
        this.kilometersPerLiter = kilometersPerLiter,
        this.gasCost = gasCost
    }
    driveCar(kilometersTraveled) {
        //kilometersPerLiter = kilometersTraveled / Liter   
        this.remainingGasoline -= Math.round(kilometersTraveled / this.kilometersPerLiter).toFixed(0);
        let moneyCost = (kilometersTraveled / this.kilometersPerLiter) *this.gasCost
        console.log(`Voce gastou ${Math.round(moneyCost).toFixed(2)} reais`)
        if(this.remainingGasoline < 10){
            console.log('Hora de abastecer!');
        }
    }
    refuel(stockedGasoline){
        this.remainingGasoline += stockedGasoline
        console.log(`O tanque foi abastecido em ${stockedGasoline}, o tanque está com ${this.remainingGasoline} litros`)
    }
}

let meuCarro = new Car('Citroen C3', 'preto', 48, 12.4, 4.83);

console.log(meuCarro);

meuCarro.driveCar(50.3*2);

console.log(meuCarro);
