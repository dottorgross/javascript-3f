// OGGETTI
// Object Oriented Programming OOP

// definisco un oggetto facendo una lista delle sue proprietà (nome, colore del pelo, ecc.)

let gatto = {
    nome: "Pussy",
    sesso: "f",
    cibo: "Friskies",
    pelo: "Tigrato",
    razza: "Soriano",
    zampe: 4,
    code: 1,
    peso: 3.5,
    nemici: ["Acqua", "Cani", "Vicentini"],
    vaccino: true
}

// proviamo a scrivere l'oggetto nella console
console.log(gatto)

// posso leggere una delle proprietà:
console.log(gatto.razza)
console.log(gatto.nemici[1])

// posso leggere una proprietà anche facendo come per gli array:
console.log(gatto['razza'])

// posso cambiare il colore del pelo
gatto.pelo = "Rosso"
console.log(gatto)

// posso aggiungere un nemico
gatto.nemici.push("Jerome")
console.log(gatto)

// posso cancellare una proprietà
delete gatto.cibo
console.log(gatto)