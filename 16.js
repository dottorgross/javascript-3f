// array multidimensionali
// cioè in un array posso mettere degli array come elementi

let cfp = [['2F', '3F', '4B'],['2C', '3C', '4A']];

// per prendere il primo sottoarray scrivo:
console.log(cfp[0]);

// per prendere il secondo sottoarray
console.log(cfp[1]);

// per prendere la seconda classe dei motoristi
console.log(cfp[1][1]);

// naturalmente posso usare i metodi push, ecc. anche per inserire interi array
cfp.push(['3G', '4G', '5G']);
console.log(cfp);