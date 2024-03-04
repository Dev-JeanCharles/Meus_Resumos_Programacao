// 1) Use a função para converter de Celsius para Fahrenheit feita no exercício 2. 
// Só que desta vez, a temperatura em Celsius deve ser digitada pelo usuário no 
// campo apropriado e o cálculo deve ser feito quando o botão "Calcular" for pressionado.

// * Para pegar o valor do input de temperatura use .value em vez de .innerHTML
function convert(temp_c) {
    return (9 * temp_c / 5) + 32;
}


document.getElementById('converter').onclick = function () {
    var celsius = parseFloat(document.getElementById('temp_celsius').value);
    var fahrenheit = convert(celsius);
    document.getElementById('temp_fahr').innerHTML = "<strong>" + fahrenheit + "</strong>";
};

// 2) Solte dentro do elemento abaixo uma lista de todos os anos em que houve a Copa do Mundo 
// de Futebol, desde 1930 até 2018. 

// Lembre-se que a copa do mundo ocorre de 4 em 4 anos.
var anosCopa = 2018;
var listaAnos = "";

for(var a = 1930; a <= anosCopa; a += 4) {
    listaAnos += "<li>" + a + "</li>"
    document.getElementById('anos_copa').innerHTML = listaAnos
}

// 3) Informe nos campos abaixo duas notas e o total de faltas do aluno 
// e depois solte o resultado no local apropriado. Sendo que:

// O aluno para ser aprovado precisa ter, no mínimo 70% de presença (o total de aulas é 20)
// O aluno para ser aprovado precisa ter média maior ou igual a 6.5
// Caso o aluno não seja aprovado, o programa precisa dizer se foi por 
// motivo de média insuficiente, por faltas ou pelos dois motivos.

document.getElementById('calcular').onclick = function () {
    var nota1 = parseInt(document.getElementById('nota1').value);
    var nota2 = parseInt(document.getElementById('nota2').value);
    var nFaltas = parseInt(document.getElementById('n_faltas').value);

    var media = (nota1 + nota2) / 2;
    var presenca = (20 - nFaltas) / 20;

    var situacao;

    if(media >= 6.5 && presenca >= 0.7) {
        situacao = "Aprovado"
    } else if (media < 6.5 && presenca < 0.7) {
        situacao = "Reprovado por falta e por média"
    } else if (media < 6.5) {
        situacao = "Reprovado por media"
    } else if (presenca < 0.7) {
        situacao = "Reprovado por faltas"
    }
    document.getElementById('result').innerHTML = situacao
}

// 4) Temos abaixo uma lista de vendas de um curso. 
// Cada venda é um objeto cujas propriedades guardam informações sobre a venda, 
// como o nome do aluno que comprou, a data, o preço e se houve pedido de reembolso.

var vendas_cursos = [

    {
        'aluno': 'Emmanuel Gomes',
        'data': '10/06/2018',
        'valor': 34.99,
        'reembolso': null
        
    },

    {
        'aluno': 'Carla Dias',
        'data': '10/06/2018',
        'valor': 29.99,
        'reembolso': null
        
    },

    {
        'aluno': 'Rafael Marques',
        'data': '11/06/2018',
        'valor': 39.99,
        'reembolso': '13/06/2018'
        
    },

    {
        'aluno': 'Maria Isabel Pereira',
        'data': '11/06/2018',
        'valor': 29.99,
        'reembolso': null
        
    },

    {
        'aluno': 'Andre Luis Silva',
        'data': '12/06/2018',
        'valor': 34.99,
        'reembolso': null
        
    }

];

// Solte as vendas na tabela abaixo, mas não inclua as vendas que tiveram reembolso pedido. 

// vendas_cursos
// total_vendas
var totalVendas = 0;
document.getElementById('vendas_cursos').innerHTML = ""

for(b = 0; b < vendas_cursos.length; b++) {
    if (vendas_cursos[b].reembolso == null) {
        totalVendas += vendas_cursos[b].valor;

        var linhaHTML = "";

        linhaHTML += '<tr>';
        linhaHTML += '  <td>' + vendas_cursos[b].aluno +'</td>';
        linhaHTML += '  <td>' + vendas_cursos[b].data +'</td>';
        linhaHTML += '  <td>' + vendas_cursos[b].valor +'</td>';
        linhaHTML += '</tr>';

        document.getElementById('vendas_cursos').innerHTML += linhaHTML;
    }
}

// Calcule também o total de vendas e solte na última linha da tabela.
document.getElementById('total_vendas').innerHTML = totalVendas

