//let filmes = ['star wars', 'totoro', 'rocky', 'pulp fiction', 'la vida es bella'];

//for (i = 0; i < filmes.length; i++) {
    //filmes[i] = filmes[i].toUpperCase();
   // console.log (filmes[1]);
//}

let filmes = ['star wars', 'totoro', 'rocky', 'pulp fiction', 'la vida es bella'];

for (i = 0; i < filmes.length; i++) {
let filmes = ['star wars', 'totoro', 'rocky', 'pulp fiction', 'la vida es bella'];

function converteMaiuscula (lista) {
    for (i = 0; i < lista.length; i++) {
        lista[i] = lista[i].toUpperCase();
    }
    return lista;
}

console.log (converteMaiuscula(filmes));

let animacoes = ['kungfupanda', 'toystory', 'toystory2', 'toystory3'];

function passagemDeElementos(lista1, lista2) {
    let tamanhoLista = lista2.length
    for (i = 0; i < tamanhoLista; i++) {
        lista1.push(lista2.pop().toUpperCase());
    }
    return lista1;
}

console.log(passagemDeElementos(filmes, animacoes));