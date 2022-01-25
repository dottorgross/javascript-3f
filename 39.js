function energiaCinetica(m, v) {
    let E = 0.5*m*v**2
    return E
}

function kmh2ms(v) {
    return v / 3.6
}

// Probblema: data una motocicletta comprensiva di conducente di massa totale pari a 150 kg
// che viaggia alla velocità di 85 km/h
// calcolare l'energia cinetica

let massa = 150 // kg
let velocità = 85 // km/h

console.log("L'energia cinetica è di " + energiaCinetica(massa, kmh2ms(velocità)) + " J")