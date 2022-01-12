let preziose = ['Rubino', 'Giada', 'Diamante'];

console.log(preziose);

// ci sono due metodi che permettono di inserire
// un elemento all'inizio o alla fine di un array
preziose.unshift('Smeraldo');
preziose.push('Zaffiro');
console.log(preziose);

// ci sono due metodi che permettono di togliere
// un elemento dall'inizio o dalla fine di un array
let elemento = preziose.shift();
console.log(elemento);
console.log(preziose);

elemento = preziose.pop();
console.log(elemento);
console.log(preziose);

