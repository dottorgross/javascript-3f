// un array è un contenitore di dati (stringhe, numeri, altri array.......)

let fiori = [ 'margherita', 'rosa',
              'mughetto', 'primula'
            ];

// posso sapere quanti elementi ci sono nell'array
console.log(fiori.length);

// posso ottenere un certo elemento dell'array usando l'indice (nb: l'indice parte da 0)
console.log(fiori[0]);
console.log(fiori[1]);
console.log(fiori[2]);
console.log(fiori[3]);

// posso far fare il lavoro a un ciclo
for(let i = 0; i<=3; i++) {
    console.log(fiori[i]);
}