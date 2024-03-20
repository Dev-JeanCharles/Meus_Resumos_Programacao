// Trabalhando com grupos - Grupos Especiais
const texto = 'João é calmo, mas no transito fica nervoso.'

console.log(texto.match(/[\wÀ-ù]+/gi))

// Positive lookahead: Pega tudo que está na frente e retorna 
console.log(texto.match(/[\wÀ-ú]+(?=,)/gi))
console.log(texto.match(/[\wÀ-ú]+(?=\.)/gi))
console.log(texto.match(/[\wÀ-ú]+(?=, mas)/gi))

// Negative lookahead: Pega tudo aquilo que não tem do texto que foi selecionado no grupo que está na frente
console.log(texto.match(/[\wÀ-ú]+\b(?!,)/gi))
console.log(texto.match(/[\wÀ-ú]+[\s|\.](?!,)/gi))