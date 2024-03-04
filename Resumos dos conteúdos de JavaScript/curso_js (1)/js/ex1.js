// 1)
console.log("O arquivo 'ex1.js' está funcionando")

// 2)
var nome = 'Jean';
var anoNascimento = '18/12/2004';
var idade = 19;

console.log('Ola, eu me chamo ' + nome + ',' + 'tenho ' + idade + ' anos e estou estudando Javascript');

// 3)

var nome = 'João';
var matricula = 34561234; 
var notaProva1 = 90;
var notaProva2 = 50;

var media = (notaProva1 + notaProva2) / 2

console.log('O aluno ' + nome + ',' + ' matrícula ' + matricula + ',' + ' obteve a média final ' + media)

// 4)
var numeroTelefone = '998887655'

var teste1 = numeroTelefone.length == 9
var teste2 = numeroTelefone.length != 9


console.log("Resultado do teste: " + teste1)
console.log("Resultado do teste: " + teste2)


// 5)
var operacao = 32e6

console.log(operacao)

// 6)

var quantidade = "25";
var numero = 6;
var pressao;
var temperatura = 40;
temperatura = null;

console.log(quantidade += quantidade);
console.log( (7+5) / numero + 2 ); 
console.log(pressao);
console.log(temperatura);
console.log(typeof pressao);
console.log(typeof temperatura);

// 7)

var idade = 65;

console.log(idade != 65);
console.log(idade >= 65); 
console.log("65" == idade);
console.log(65 !== idade);
console.log(typeof (idade > 60));
console.log(typeof (idade > 70));



