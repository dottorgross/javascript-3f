/*
 CARRELLO DELLA SPESA
 Dato il nome di un prodotto
 e un array contenente dei sottoarray del tipo [quantità, prodotto],
 incrementare di un’unità la quantità del prodotto corrispondente.
 */

 let prodottoCercato = 'budino';

 let carrello = [
    [3, 'patatine'],
    [1, 'cioccolata'],
    [2, 'budino'],
    [5, 'vino']
 ];

 // faccio un ciclo per leggere tutti i prodotti nel carrello
 for(let i=0; i<carrello.length; i++) {
    // guardo la riga i
    let riga = carrello[i]
    // se il prodotto della riga è uguale a quello cercato
    if(riga[1] == prodottoCercato) {
        // aumento la quantità di 1
        carrello[i][0]++
    }
 }

 console.log(carrello)