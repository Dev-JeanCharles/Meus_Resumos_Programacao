// Introdutório - Flags
const texto = 'Jean Charles é muito inteligente, isso é legal.'

console.log(texto.match(/J|in/))

// i - ignore case (ignorar letra maiúscula e minúscula)
console.log(texto.match(/j|in/i))

// g - global
console.log(texto.match(/in|j/gi))