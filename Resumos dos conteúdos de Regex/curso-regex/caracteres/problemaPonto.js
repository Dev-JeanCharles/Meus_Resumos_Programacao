const texto = 'Bom\ndia'

console.log(texto.match(/.../gi))
console.log(texto.match(/..../gi)) // O ponto não engloba o \n

// DotAll - Algumas linguagens tem uma flag /exp/s, mas o JS não reconhece essa flag