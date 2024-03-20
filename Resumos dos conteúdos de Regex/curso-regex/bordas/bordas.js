// Trabalhando com bordas
const texto = 'Romário era um excelente jogador\n, mas hoje é um político questionador'

console.log(texto.match(/r/gi))
console.log(texto.match(/^r/gi)) // ^ significa início da linha/string
console.log(texto.match(/r$/gi)) // $ significa final da linha/string
console.log(texto.match(/^r.*r$/gi)) // Problema do dotall 