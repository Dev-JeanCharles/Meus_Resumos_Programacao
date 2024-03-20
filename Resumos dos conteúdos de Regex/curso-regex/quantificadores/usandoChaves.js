// Trabalhando com quantificadores - intervalos {n,m}
// Para definir um quantificador: { }

const texto = 'O João recebeu 120 milhões apostando os números 6 9 21 23 45 46'
console.log(texto.match(/\d{1,2}/g))
console.log(texto.match(/[0-9]{2}/g))
console.log(texto.match(/\d{1,}/g)) 
console.log(texto.match(/\w{7}/g)) 
console.log(texto.match(/[\wõ]{7,}/g))

// No futuro...
console.log(texto.match(/\b\d{1,2}\b/g))
console.log(texto.match(/\b[\wõ]{7}\b/g))