// Trabalhando com conjuntos - Selecionando intervalos UNICODE

const texto = 'áéíóú àèìòù âêîôû ç ãõ ü'
console.log(texto.match(/[\u00C0-\u00FC]/g))