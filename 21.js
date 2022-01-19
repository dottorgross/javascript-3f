/* creare un array libri contenente una serie di sottoarray
    ognuno dei quali contiene il titolo, l'autore e il numero di pagine di un libro
    scrivere un elenco dei soli titoli
*/

libri = [
    ['Ventimila leghe sotto i mari', 'Verne, J.', 824],
    ['La mia vita', 'Perozo, J.', 450],
    ['I miei sushu', 'Chen, G.', 10]
];

for(let i=0; i<libri.length; i++) {
    console.log(libri[i][1]);
}