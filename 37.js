// scrivi una funzione sconto
// che accetta due argomenti:
// - prezzo (ad es. 1000 euro)
// - percentuale (ad es. 10)
// e restituisce lo sconto che sarà applicato (nel nostro esempio 10% di 1000 = 100 €)
// suggerimento: il calcolo da fare è prezzo * percentuale / 100

function sconto(prezzo, percentuale) {
    let sconto = prezzo * percentuale / 100
    return sconto
}

console.log(sconto(2000,32))