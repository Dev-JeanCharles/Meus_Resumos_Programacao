// 1) Resolva o cálculo abaixo e mostre o resultado na caixa reservada para isto. 
// Os ids das caixas são "num_1", "num_2" e "resultado". 
// Para que o resultado saia em negrito, coloque-o dentro da tag <strong>.
    var num1 = parseInt(document.getElementById('num_1').innerHTML);
    var num2 = parseInt(document.getElementById('num_2').innerHTML);
    
    document.getElementById('resultado').innerHTML = num1 + num2;

// 2) Crie uma função para converter graus Celsius para Fahrenheit, 
// depois invoque a função usando o valor que está na caixa azul e 
// solte o resultado na caixa amarela.

// Os ids são "caixa_azul" e "caixa_amarela".

// A formula de conversão é: F = (9 * C / 5) + 32

var celsius = parseFloat(document.getElementById('caixa_azul').innerHTML);
var fahrenheit = convert(celsius);

document.getElementById('caixa_amarela').innerHTML = "<strong>" + fahrenheit + "</strong>";

function convert(temp_c) {
    var temp_f = (9 * temp_c / 5) + 32;
    return temp_f;
}

// 3) Forme um novo array composto pelos 2 últimos elementos do array abaixo. 
// Em seguida adicione ao final do novo array mais um grupo composto pelos alunos: 
// "Mariana", "Felipe" e "Carla".
    var grupos = [
        [ "João" , "Maria" ],
        [ "Pedro" , "Joana", "André", "Júlio" ],
        [ "Carolina" , "Helena", "Marcelo" ],
    ]; 

    var grupos1 = grupos[2].slice(-2)
    grupos1.push(["Mariana", "Felipe", "Carla"]);

    console.log(grupos1);

    //4) Considere o objeto abaixo:

    var curso = {
        'titulo': "Aprenda programação em Python",
        'categoria': ['programação', 'tecnologia', 'python'],
        'n_aval_5_estrelas': 420,
        'n_aval_4_estrelas': 80,
        'n_aval_3_estrelas': 33,
        'n_aval_2_estrelas': 20,
        'n_aval_1_estrela': 4,
        'total_avaliacoes' : function (){
            return this.n_aval_5_estrelas + this.n_aval_4_estrelas + this.n_aval_3_estrelas + this.n_aval_2_estrelas + this.n_aval_1_estrela;
        },
        'media_estrelas' : function () {
            var totalAvaliacoes = this.total_avaliacoes();
            var somaEstrelas = (5 * this.n_aval_5_estrelas) + (4 * this.n_aval_4_estrelas) + (3 *this.n_aval_3_estrelas) + (2 * this.n_aval_2_estrelas) + (1 * this.n_aval_1_estrela)
            return somaEstrelas / totalAvaliacoes
        }
    }

    // a) A categoria principal do curso é o primeiro elemento da lista 
    // associada à chave 'categoria'. Solte esta categoria abaixo, 
    // no span que tem id "categoria_principal"

    var categoria_principal = document.getElementById('categoria_principal')

    var categoria = curso.categoria[0];
    categoria_principal.innerHTML = categoria;

    console.log(curso.categoria[0]);


    // b) As propriedades n_aval... representam a quantidade de avaliações do curso, 
    // de 1 até 5 estrelas. Crie dois métodos: um para retornar o total de avaliações do curso 
    // e um para retornar a média de estrelas que tem o curso (exemplo: 4.5). 
    
    // Depois utilize-os para soltar estas informações nas caixas abaixo, 
    // que tem os ids "total_aval" e "media_aval".

    console.log(curso.total_avaliacoes());
    console.log(curso.media_estrelas().toFixed(2));

    var total = document.getElementById('total_aval');
    var media = document.getElementById('media_aval');

    var totalAval = curso.total_avaliacoes();
    total.innerHTML = totalAval;

    var mediaAval = curso.media_estrelas();
    media.innerHTML = mediaAval.toFixed(2)

    //5) Crie um objeto para guardar nome, sobrenome e e-mail de uma pessoa. 
    // Em seguida,
    // crie uma função que receba o objeto como argumento 
    // e retorne um string com o html de uma tabela conforme o modelo abaixo. 
    // Em seguida Solte o html da tabela dentro elemento que tem id="tabela".

    var pessoa = {
        'nome' : 'Jean',
        'sobrenome' : 'Charles',
        'email' : 'jeancduasan@gmail.com'  
    };
    function criarTabela (person) {
        var htmlTable = '<div= class="tableBox">';
        htmlTable +=       '<table>';
        htmlTable +=           '<tr>';
        htmlTable +=               '<th>Nome Completo</th>';
        htmlTable +=               '<th>Email</th>';
        htmlTable +=           '</tr>';
        htmlTable +=            '<tr>';
        htmlTable +=               '<td>'+ person.nome + ' ' + person.sobrenome +'</td>';
        htmlTable +=               '<td>'+ person.email + '</td>';
        htmlTable +=           '</tr>';
        htmlTable +=       '</table>';
        htmlTable +=     '</div>';
        return htmlTable;
    }

    var tabela = criarTabela(pessoa)

    document.getElementById('tabela').innerHTML = tabela


