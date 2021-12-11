/*
SEGUINDO A MESA DE TRABALHO DA AULA 13. DESENVOLVA ESSE ALGORITMO 
1 - CRIE UMA FUNÇÃO CONSTRUTORA PARA O OBJETO CONTA BANCARIA COM AS SEGUINTES PROPRIEDADES:

● Número da conta (somente números)
● Tipo de conta (conta corrente ou poupança em $)
● Saldo em $ (valor apenas)
● Titular da conta (nome completo)

2 - MOLDE AS INFORMAÇÕES DO ARQUIVO https://drive.google.com/file/d/16L2NejZU49mCLbo6RTmSKtuElOTOYUXv/view
PARA O FORMATO JSON, E EXPORTE ESSE JSON COMO MODULO

3 - DESENVOLVA UM ALGORITOMO QUE IRA RECEBER O MODULO ARRAY DE JSON E CRIE DINAMICAMENTE OS 
OBJETOS CONTA BANCARIA EM UM SEGUNDO ARRAY LISTA USUARIOS ARMAZENE ESSE OBJETOS 

4 - CRIE DE UM OBJETO LITERAL CHAMADO BANCO QUE TERÁ UMA PROPRIEDADE CHAMADA CLIENTES, ELE SERÁ COMPOSTO 
PELA LISTA DE OBJETOS GERADOS NO PONTO ANTERIOR.

5 - O OBJETO DO BANCO CRIARÁ UM MÉTODO CHAMADO CONSULTARCLIENTE QUE RECEBERÁ UM
NOME (TITULAR) POR PARÂMETRO E DEVE PESQUISAR NA LISTA DE CONTAS E RETORNAR AO
OBJETO DO CLIENTE QUE CORRESPONDE A ESSE NOME INSERIDO.


*/

function contaBancaria (numeroconta, tipoconta, saldoconta, titularconta){
    this.numeroconta = numeroconta
    this.tipoconta = tipoconta
    this.saldoconta = saldoconta
    this.titularconta = titularconta
}

let dadosJson = [
    {"numero": "548273622", "tipo": "conta corrente", "saldo": "27771", "titular": "Abigael Natte"},
    {"numero": "548273631", "tipo": "conta corrente", "saldo": "27771", "titular": "Abigael Natte"},
    {"numero": "548273721", "tipo": "conta corrente", "saldo": "27771", "titular": "Abigael Natte"},
    {"numero": "548273841", "tipo": "conta corrente", "saldo": "27771", "titular": "Abigael Natte"},
    {"numero": "548273548", "tipo": "conta corrente", "saldo": "27771", "titular": "Abigael Natte"},
    {"numero": "548273289", "tipo": "conta corrente", "saldo": "27771", "titular": "Abigael Natte"},
    {"numero": "548273587", "tipo": "conta corrente", "saldo": "27771", "titular": "Abigael Natte"},
    {"numero": "548273914", "tipo": "conta corrente", "saldo": "27771", "titular": "Abigael Natte"},
    {"numero": "548273123", "tipo": "conta corrente", "saldo": "27771", "titular": "Abigael Natte"},
    {"numero": "548273456", "tipo": "conta corrente", "saldo": "27771", "titular": "Abigael Natte"},
]

function conta(dadosJson){
    let contaNova = []
    for (let i = 0; i < dadosJson.length; i++){
    contaNova = new contaBancaria(dadosJson[0].numero, dadosJson[0].titulo, dadosJson[0].saldo, dadosJson[0].titular)
    } return contaNova
}

console.log(conta(dadosJson))