// let carro = {
//     marca : "ford"
//     modelo : "ka"
//     andar : function(){
//         return "carro"+this.modelo+"andando"
//     }
// }; //objeto literal
// console.log(carro.andar() );

function Carro(marca, modelo){
    this.marca = marca;
    this.modelo = modelo;
}

let carroNovo = new Carro ("Tesla", "x");

console.log (carroNovo);
