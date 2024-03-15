import Livro from "./model/livro";
import $ from 'jquery'

const livro = new Livro('Dom Quixote', 180.80, 0.15)

// console.log(livro.precoComDesconto())
$('body').append(`<h1>${livro.nome}</h1>`)
$('body').append(`<h2>Preço: R$${livro.precoComDesconto()}</h2>`)