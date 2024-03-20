// Trabalhando com conjuntos - Conjuntos + MetaCaracteres

const texto = '.$+*?-'

console.log(texto.match(/[+.?*$]./g)) // Não precisa de escape dentro de um conjunto
console.log(texto.match(/[$-?]/g)) // Isso é um intervalo válido (range)

// Não é um intervalo (range)
console.log(texto.match(/[$\-?]/g))
console.log(texto.match(/[-?]/g))

// Podem precisar de escape dentro de um conjunto: - [ ] ^