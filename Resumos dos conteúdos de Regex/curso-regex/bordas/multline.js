// Trabalhando com bordas - MultLine
const texto = `
Leo é muito legal
Emanuel foi jogar em Sergipe
Bianca é casada com Habib
`

console.log(texto.match(/\n/g))
console.log(texto.match(/^(\w).+\1$/g))
console.log(texto.match(/^(\w).+\1$/gim))