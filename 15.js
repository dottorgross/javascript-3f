/* PIZZERIA
In una pizzeria c'è un pizzaiolo che prepara le pizze
e una signorina che riceve gli ordini telefonici.
Scriviamo un'app che dica al pizzaiolo quale pizza preparare.
*/

let ordini = [];

// una signora ordina una margherita
ordini.push('margherita');
console.log("Ordini: " + ordini);

// un signore ordina una quattro stagioni
ordini.push('quattro stagioni');
console.log("Ordini: " + ordini);

// il pizzaiolo prepara una pizza
console.log("Metto in forno una " + ordini.shift());
console.log("Ordini: " + ordini);

// un signore ordina una viennese
// il pizzaiolo prepara una pizza
// il pizzaiolo prepara una pizza
// una ragazza ordina una marinara
// il pizzaiolo prepara una pizza