// Trabalhando com quantificadores - Zero ou Mais
// * -> Representa zero ou mais
const texto1 = 'De longe eu avistei o fogo e uma pessoa gritando: FOGOOOOOOOO!'
const texto2 = 'There is a big fog in NYC'

const regex = /fogo*/gi
console.log(texto1.match(regex))
console.log(texto2.match(regex))

