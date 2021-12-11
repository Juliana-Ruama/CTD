/*let bemVindo = () => 'Olá Mundo!';
let dobro = numero => numero * 2;
let soma = (a, b) => a + b;
let horaAtual = () => {
let data = new Date();
return data.getHours() + ':' +
data.getMinutes();
}*/

/*setTimeout( function(){
    console.log('Olá mundo');
}, 1000);*/

/*setInterval( function () => {
    console.log ('olá mago');
}, 1000);*/

/*let print = () =>{
    console.log('Olá mundo');
}

setInterval(() => {
    
}, interval);*/

/*function nc(nome, sobrenome) {
    return nome+' '+sobrenome
}

//console.log (nomeCompleto("Marcos","Santana"));

function bomDia(nome, sobrenome, callback) {
    return 'Olá '+callback(nome, sobrenome)
}

//console.log( bomDia("Johnny", "Pecego", nc) )

//console.log( bomDia("Johnny", "Pecego", nomeCompleto) )

function acaoCarro(callback){
    return callback();
}
console( acaoCarro(function(){
    return 'Ola'
}));

function acaoCarro(callback) {
    return callback();
}

function andar() {
    console.log('carro Andando');
}

function parar() {
    console.log('carro parou');
}
acaoCarro(andar);
acaoCarro(parar);
