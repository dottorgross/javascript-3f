let tavolo = {
    tipo: 'tavolo',
    lunghezza: 2,
    larghezza: 1,
    altezza: 1.5,
    materiale: 'faggio'
}

let sedia = {
    tipo: 'sedia',
    lunghezza: 0.6,
    larghezza: 0.6,
    altezza: 1.2,
    materiale: 'plastegon'
}

let stanza = {
    mobili: [sedia, tavolo, sedia, sedia],
    larghezza: 8,
    lunghezza: 4,
    altezza: 3
}

console.log(stanza)
console.log(stanza.mobili[1].tipo)