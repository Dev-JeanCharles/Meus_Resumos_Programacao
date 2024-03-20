// Trabalhando com caracteres brancos

const texto = `
ca	r
r	o s!
`
// Além do espaço o '\s' é o shorthand para outros "brancos": \t \n \f
console.log(texto.match(/ca\tr\nr\to\ss!/))