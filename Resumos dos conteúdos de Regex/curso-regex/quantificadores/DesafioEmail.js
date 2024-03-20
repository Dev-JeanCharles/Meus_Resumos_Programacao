const texto = ` 
Os emails dos convidados são:
fulano@cod3r.com.br
xico@gmail.com
jeancduasan@gmail.com
joao@empresa.info.br
maria_silva@registro.br
rafa.sampaio@yahoo.com
`

console.log(texto.match(/\w[a-z0-9._]+@[a-z0-9.]+\.[a-z]{2,}/g))
console.log(texto.match(/\w+@\w+\.+\w{2,}/g))
console.log(texto.match(/[\w.]+@\w+\.\w{2,}/g))
console.log(texto.match(/[\w.]+@\w+\.\w{2,}\.?\w{0,}/g))

// No futuro
console.log(texto.match(/[\w]+@\w+\.\w{2,}(\.\w{2})?/g))