
function polegada_cm(x){
   console.log(x * 2.54)
} 

polegada_cm(50);


//b)
function URL(x){
   console.log( "http://www."+x+".com.br" )
} //

URL("Juliana")

// c)
function exclamacao(x){
    console.log (x+"!")
} //

exclamacao("oi")


// d) 
function human_to_dog(x) {
    console.log (x * 7)
} //

human_to_dog(4)

// e)
function salario(x){
    console.log (x / 160)
}// 

salario(1000)

// f) 
function IMC(peso, altura) {
    console.log (peso / (altura^2))
} //

IMC(65, 1.75)


function CONVERTER_PARA_MAIUSCULO(texto) {
console.log (texto.toUpperCase())

}
CONVERTER_PARA_MAIUSCULO("teste")

function TIPO_VARIAVEL(texto){
console.log (typeof(texto))

}

TIPO_VARIAVEL("A")

function CALCULO_CIRCUNFERENCIA (raio){
    console.log ((2*Math.PI)*raio)
}

CALCULO_CIRCUNFERENCIA (2)
