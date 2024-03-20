// Trabalhando com quantificadores - Um ou Mais
// + -> Representa um ou mais
const texto1 = 'De longe eu avistei o fogo e uma pessoa gritando: FOGOOOOOOOO!'
const texto2 = 'There is a big fog in NYC'

const regex = /fogo+/gi

console.log(texto1.match(regex))
console.log(texto2.match(regex))

const texto3 = 'Os números: 0123456789.'

console.log(texto3.match(/[0-9]/g))
console.log(texto3.match(/[0-9]+/g))
console.log(texto3.match(/\d+/g))