// scrivi una funzione saluta(nome,numero)
// che prende due argomenti:
// - nome
// - numero
// e saluta la persona tante volte quante dice il numero
// ad esempio saluta("Paolo", 3) deve dare in output:
// Ciao Paolo
// Ciao Paolo
// Ciao Paolo
// suggerimento: mette un ciclo for dentro la funzione

function saluta(nome,numero) {
    for(let i=1; i<=numero; i++) {
        console.log("Ciao " + nome)
    }
}

saluta("Paolo", 1000000)