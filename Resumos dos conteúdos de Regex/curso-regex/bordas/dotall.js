// Trabalhando com bordas - DotAll
const texto = 'Romário era um excelente jogador\n, mas hoje é um político questionador'

console.log(texto.match(/^r.*r$/gi)) // Problema do dotall 
console.log(texto.match(/^r[\s\S]*r$/gi))