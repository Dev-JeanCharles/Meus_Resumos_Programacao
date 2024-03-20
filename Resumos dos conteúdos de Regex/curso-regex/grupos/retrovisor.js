// Trabalhando com grupos - Retrovisores
const texto = '<b>Destaque</b><strong>Forte</strong><div>Conteudo</div>'

console.log(texto.match(/<(\w+)>.*<\/\1>/g))

const texto2 = 'Lentamente é mente muito lenta.'

console.log(texto2.match(/(lenta)(mente).*\2.*\1\./gi))

console.log(texto2.match(/(?:lenta)(mente).*\1/gi)) // Não guarda o valor

console.log(texto2.match(/(lenta)(mente)/gi))
console.log(texto2.match(/(lenta)(mente)?/gi))
console.log(texto2.replace(/(lenta)(mente)/gi, '$2'))

const texto3 = 'abcdefgijkll'

console.log(texto3.match(/(a)(b)(c)(d)(e)(f)(g)(i)(j)(k)(l)\11/g))

