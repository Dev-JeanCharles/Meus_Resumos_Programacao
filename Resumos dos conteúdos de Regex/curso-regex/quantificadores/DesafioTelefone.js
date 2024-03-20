const listaTelefonica = `
(11) 98756-1212
98765-4321
(21) 998301922
(21) 99830-1922
(85)3261-8899

`

const formatado = listaTelefonica.replace(/\n/g)
console.log(formatado.match(/\(?\d{0,2}\)?\s?\d{4,5}-?\d{4}/g))