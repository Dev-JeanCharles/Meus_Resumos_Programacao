// Aula 1 - Alerta
    // alert("Mensagem enviada pelo alert");

// Aula 2 - Console
    // console.log("Mensagem enviada pelo console")

// Aula 3 - Variaveis
    // var latitude = 40.8763;
    // var longitude = -8.08373;
    // console.log(latitude);
    // console.log(longitude)

// Aula 4 - Tipos de Dados - String
    // var nome = "João";  // podem ser usadas aspas duplas
    // var sobrenome = 'Gomes';  // ou aspas simples
    // var cpf = '111.111.111-11';  
    // var telefone = "998887655";
    // var ddd = '21';
    // var email = 'joao@gmail.com';
    // var biografia = "João começou a sua carreira como desenvolvedor web em 2010 e já participou de importantes projetos, como...";

    // console.log(nome + ' ' + sobrenome);
    // console.log('(' + ddd + ')' + telefone);

    // console.log('Primeira letra do nome: ' + nome[0]);
    // console.log('Ultima letra do nome: ' + nome[3])
    // console.log('Tamanho do numero de telefone: '  + telefone.length)

// Aula 5 - Tipos de Dados - Numbers
    // var num1 = 20;
    // var num2 = 3;

    // var soma = num1 + num2;
    // var subtracao = num1 - num2;
    // var divisao = num1 / num2;
    // var multiplicacao = num1 * num2;

    // var media = (num1 + num2) / 2;
    // console.log('A média é: ' + media);

    // console.log(Math.pow(num1, 4))

    // var increment = 20;
    // increment = increment + 5; // redefinimos o valor dela, para o valor que ela já possuía, mais 5.
    // console.log(increment); // O console mostrará 25

    // increment = 1;
    // increment += 5;
    // console.log(increment); // O console mostrará 6

    // increment = 10;
    // increment--;
    // increment--;
    // console.log(increment)

    // var ddd = 21;
    // var telefone = 998887655;

    // var ddd_String = ddd.toString();
    // var tel_String = telefone.toString();

    // console.log(ddd_String + tel_String);

    // var idade = '17';

    // idade = parseInt(idade);
    // idade++;
    // console.log(idade)

// Aula 6 - Tipos de Dados - Booleans
    // var idade = 65;

    // var test = idade !== 65;
    // console.log(test)

    // var vtype = 12;

    // console.log(typeof vtype == "number")

// Aula 7 - Tipos de Dados - null e undefined
    // var undf;

    // console.log(typeof undf);

    // var nome = 'Pedro';

    // console.log(nome[8]);

    // var temperatura = 36;
    // console.log(temperatura);

    // temperatura = null;
    // console.log(temperatura);
    
    // console.log(typeof temperatura)

// Aula 8 - Trabalhando com DOM
    // var conteudoCaixa = document.getElementById("caixa_azul").innerHTML;

    // // console.log(conteudoCaixa)

    // document.getElementById("caixa_amarela").innerHTML = '<h1>' + 'Caixa amarela' + '</h1>';

    // document.getElementById("caixa_azul").innerHTML = '<h1>' + conteudoCaixa + '</h1>'


// Aula 9 - Funções
    // function somaNumeros() {
    //     var x = 5;
    //     var y = 2;
    //     var soma = x + y;
    //     console.log(soma);
    // }

    // somaNumeros();

    // function somaArgs(num1, num2) {
    //     var soma = num1 + num2;
    //     return soma;
    // }

    // var soma_f = somaArgs(10,20);
    // console.log(soma_f)

// Exercicio - Funcões
    // function valor_imc(peso,altura) {
    //     var imc = peso / (altura * altura);
    //     return imc;
    // }
    // var meu_peso = parseFloat(document.getElementById('peso').innerHTML);
    // console.log(typeof meu_peso);
    // var minha_altura = parseFloat(document.getElementById('altura').innerHTML);

    // var meu_imc = valor_imc(meu_peso,minha_altura)

    // document.getElementById('imc').innerHTML = meu_imc.toFixed(2);

// Aula 10 - Arrays
    // var alunos = [ "João" , "Maria", "José" ];
    // var num_primos = [ 2, 3, 5, 7, 11, 13 ];

    // console.log(alunos.length)
    // console.log(num_primos[2])
    // console.log(num_primos[20])

    // var grupos = [ 
    //     [ "João" , "Maria" ],
    //     [ "Pedro" , "Joana", "André", "Júlio" ],
    //     [ "Carolina" , "Helena", "Marcelo" ]
    // ];

    // console.log(grupos.length);
    // console.log(grupos[1][1]);

    // var ingredientes = [ "pão branco", "queijo", "presunto" ];

    // ingredientes[0] = "pão integral";
    // ingredientes[3] = "ketchup";

    // console.log(ingredientes);  

    // alunos = [ "João" , "Maria", "José", "Fernanda", "Pedro", "Elisa" ];

    // console.log(alunos.slice(-2));

// Aula 11 - Objetos
    // var funcionario = {
    //     'nome': 'Pedro Souza Gomes',
    //     'ano_nasc': 1972,
    //     'cpf': '111.111.111.11',
    //     'cargo': 'Analista de Sistemas'
    // };

    // console.log(funcionario['nome'])
    // console.log(funcionario.ano_nasc)

    // funcionario.cargo = 'Gerente de T.I';
    // funcionario.cnh = '11245565'

    // console.log(funcionario)

// Exercicio - Objects
    // var cursos = [
    //     {
    //         'titulo': 'Aprenda programação em Python 3 com facilidade do zero',
    //         'avaliacoes': 680,
    //         'alunos': 2300,
    //         'categorias': ['programacao', 'tecnologia']
    //     },

    //     {
    //         'titulo': 'Aprenda PHP e faça sites dinâmicos',
    //         'avaliacoes': 180,
    //         'alunos': 350,
    //         'categorias': ['desenvolvimento web', 'programacao']
    //     },

    //     {
    //         'titulo': 'Excel do Zero ao Avançado',
    //         'avaliacoes': 420,
    //         'alunos': 1800,
    //         'categorias': ['produtividade', 'gestão']
    //     }
    // ];

    // console.log(cursos[1].categorias[0])
    // cursos[2].categorias[1] = 'administração de empresas'
    // console.log(cursos[2].categorias[1])

// Aula 11 - Metodos de Objetos
    // var aluno = {
    //     'nome': 'Maria',
    //     'sobrenome': 'Pereira',
    //     'anoNasc' : 1992,

    //     'verIdade' : function () {
    //         // let dataAtual = new Date()
    //         // var idade = anoAtual.getFullYear() - this.anoNasc;
    //         var idade = 2024 - this.anoNasc;
    //         return idade;
    //     },

    //     'nomeCompleto': function () {
    //         var nCompleto = this.nome + " " + this.sobrenome;
    //         return nCompleto;
    //     }
    // };
    // console.log(aluno.nomeCompleto());
    // console.log('A idade é: ' + aluno.verIdade());

    // console.log(Math.round(3.7));

    // console.log(document.getElementById('tudo_obj').innerHTML);

// Aula 12 - Eventos
    // document.getElementById('click-me').onclick = function () {
    //     alert("Você clicou no botão")
    // }
    // document.getElementById('hover-me').onmouseover = function () {
    //     alert("Você passou com o cursor no botão")
    // }
    // document.getElementById('leave-me').onmouseout = function () {
    //     alert("Você saiu com o cursor do botão")
    // }
    // document.onkeydown = function() {
    //     alert('Você apertou a tecla: ' + event.keyCode);
    // };

    // function button_clicked() {
    //     alert("Você clicou no botão")
    // }

// Aula 13 - Manipulando CSS
    // var botao = document.getElementById('botao_cor');

    // botao.onclick = function () {
    //     this.style['background-color'] = "purple";
    //     this.style.transform = "translateX(100px)";
    // } 

// Aula 14 - Outros métodos getElement
    // var exemplo = document.getElementsByClassName('exemplo');

    // exemplo[0].innerHTML = "teste1";


    // console.log(exemplo)


    // var exemplo = document.getElementsByTagName('p');

    // exemplo[0].innerHTML = "Até este momento utilizamos apenas o método getElementById"

    // console.log(exemplo)

// Aula 15 -Loops: For, For/In
    // for (var a = 0; a < 5; a++) {
    //     console.log(a);
    // }

    // var alunos = ['Pedro', 'Maria', 'José', 'João', 'Carlos'];

    // for(var b = 0; b < alunos.length; b++) {
    //     console.log(alunos[b])
    // }

    // var carro = {
    //     'Ano': 2018,
    //     'Modelo': 'Fox',
    //     'Cilindradas': '1.8',
    //     'Combustível': 'Gasolina'
    // }

    // for (var prop in carro) {
    //     console.log(prop + ': ' + carro[prop])
    // }

    // var elementos = document.getElementsByTagName('h4');

    // for (var c = 0; c < elementos.length; c++) {
    //     elementos[c].style.color = 'orange';
    //     elementos[c].style['font-weight'] = "bold";
    // }

// Aula 16 -Loops: While e Do/While
    // var count = 0;

    // while(count < 5) {
    //     console.log(count);
    //     count++
    // }

    // var elementos = document.getElementsByTagName('h4');
    // var contador = 0

    // while(contador < elementos.length) {
    //     elementos[contador].style.color = 'red';
    //     elementos[contador].style['font-weight'] = 'bold';
    //     contador++;
    // }

    // var count2 = 10;

    // do {
    //     console.log(count2);
    //     count2++
    // }while(count2 < 5);

// Aula 17 - Condicionais
    // var idade = 18;

    // if (idade < 18) {
    //     console.log('menor de idade');
    // }else if (idade == 18) {
    //     console.log('Tem 18 anos');
    // } else {
    //     console.log('maior de idade');
    // }

    // var nota = 8;
    // var faltas = 1;

    // if (nota >= 7 && faltas <= 4) {
    //     console.log("Aprovado")
    // } else {
    //     console.log("Reprovado")
    // }

    // if (nota < 7 || faltas > 4) {
    //     console.log("Reprovado")
    // } else {
    //     console.log("Aprovado")
    // }

    // var nome = "Jean"

    // if(nome) {
    //     console.log("Nome: " + nome);
    // } else {
    //     console.log("Nome não informado");
    // }

// Aula 18 - Aninhamento de Loops e Condicionais
    // var socio = true;
    // var idade = 17;

    // if (socio || idade >= 65) {
    //     console.log("Ingresso é grátis")
    // } else {
    //     if (idade <= 18) {
    //         console.log("Preço a pagar: R$6,00")
    //     } else {
    //         console.log("Preço a pagar: R$12,00")
    //     }
    // }

    // var funcionarios = [
        
    //     {
    //         'nome': 'Carlos Henrique da Silva',
    //         'idade': 45,
    //         'filhos': ['Mariana Alves da Silva', 'Fernanda Alves da Silva']
            
    //     },

    //     {
    //         'nome': 'Maria Helena Pereira',
    //         'idade': 32,
    //         'filhos': undefined
            
    //     },

    //     {
    //         'nome': 'José Feliciano Maia',
    //         'idade': 39,
    //         'filhos': ['Felipe Ferreira Maia', 'Fábio Ferreira Maia', 'João Ferreira Maia']
            
    //     }
    
    // ];

    // var listaElementos = document.getElementById("filhos");

    // listaElementos.innerHTML = "";

    // for(var a = 0; a < funcionarios.length; a++) {

    //     if (funcionarios[a].filhos) {
        
    //     var listaFilhos = funcionarios[a].filhos;

    //     for (var b = 0; b < listaFilhos.length; b++) {
    //         listaElementos.innerHTML += '<li>' + listaFilhos + ' - Filho(a) de: ' + funcionarios[a].nome + '</li>'
    //         }
    //     }
    // }

// Aula 19 - BOM (Browser Object Model)
    // window.onmousemove = function(e) {

    //     if (e.pageY < 5) {
    //         alert('Não perca os descontos exclusivos na seção de promoções!');
    //     }
    // }

// Aula 20 - BOM (Browser Object Model)
    // window.localStorage.setItem("nome", "Jean");

    // console.log(localStorage['nome']);

    // localStorage.removeItem("nome");

    // console.log(localStorage['nome']);

    // document.getElementById('enviar-nome').onclick = function () {
    //     // Guardar nome digitado em localStored
    //     var nome = document.getElementById('nome-usuario').value
    //     localStorage.setItem("nome", nome);

    //     // Esconder o formulário
    //     document.getElementById('name-field').style.display = "none";

    //     // Atualizar e mostrar a mensagem de boas vindas
    //     document.getElementById('welcome-text').innerHTML = "Olá " + localStorage.nome + ", tudo bem?";
    //     document.getElementById('not-me').innerHTML = "Não é " + localStorage.nome + "?";
    //     document.getElementById('welcome-area').style.display = "initial";
    // }

    // if(localStorage.nome) {
    //     // Esconder o formulário
    //     document.getElementById('name-field').style.display = "none";

    //     // Atualizar e mostrar a mensagem de boas vindas
    //     document.getElementById('welcome-text').innerHTML = "Olá " + localStorage.nome + ", tudo bem?";
    //     document.getElementById('not-me').innerHTML = "Não é " + localStorage.nome + "?";
    //     document.getElementById('welcome-area').style.display = "initial";
    // }

    // document.getElementById('not-me').onclick = function () {
    //     // Remover chave nome do local storage
    //     localStorage.removeItem("nome");

    //     // Esconder mensagem de boas vindas
    //     document.getElementById('welcome-area').style.display = "none";

    //     // Mostrar formulario
    //     document.getElementById('name-field').style.display = "initial";
    // }

// Aula 21 - Data e Hora
    // var dataHoje = new Date(2024,0,10, 17,45,10);
    // var dataHoje1 = new Date("2020-03-18");
    // var dataHoje = new Date();
    
    // // console.log(dataHoje1);
    // console.log(dataHoje.getDate());

    // var dataNascimento = "1980-03-01";

    // var anoNascimento = new Date(dataNascimento).getFullYear();
    // var anoAtual = new Date().getFullYear();

    // var idade = anoAtual - anoNascimento;
    // console.log(idade);

    // var data = new Date();

    // console.log(data.getTime() / 31536000000);

    // var produtoEnviado  = new Date("2018-03-20").getTime();

    // var produtoEntregue = new Date("2018-04-06").getTime();

    // var entrega = (produtoEntregue - produtoEnviado) / 86400000;
    // console.log(entrega);

    // document.getElementById('dias_entrega').innerHTML = entrega;

// Aula 22 - Métodos de tempo
    // console.log('Mensagem 1');

    // window.setTimeout(function () {
    //     console.log('Mensagem 2');
    // },3000);

    // document.getElementById('mostrar-loader').onclick = function () {
    //     document.getElementById('spinner-loader').style.display = "initial";

    //     setTimeout(function (){
    //     document.getElementById('spinner-loader').style.display = "none";
    //     },5000);
    // };

    // var count = 0;

    // var interval = setInterval(function (){
    //     console.log(count);
    //     count++;
    //     if (count >= 10) {
    //         clearInterval(interval);
    //     }
    // },1000);

    // id = relogio

// Exercício - Relógio
    // function updatedTime() {
    //     var horas = new Date().toLocaleTimeString ();
    //     document.getElementById('relogio').innerHTML = horas;
    // }

    // setInterval(function (){
    //     updatedTime();
    // }, 1000)

// Aula 23 - Switch
    // function valorPedagio (categoria) {
    
    //     switch(categoria) {

    //         case '1':
    //             return 11.22;
    //             break;
    //         case '2':
    //             return 22.45;
    //             break;
    //         case '3':
    //             return 16.88;
    //             break;
    //         case '4':
    //             return 33.65;
    //             break;
    //         default:
    //             return 'categoria não encontrada.';
    //     }
    // }

    // var categoriaVeiculo = "3";

    // console.log(valorPedagio (categoriaVeiculo))

    // categoriaVeiculo = "2";

    // console.log(valorPedagio (categoriaVeiculo))

    // categoriaVeiculo = "6";

    // console.log(valorPedagio (categoriaVeiculo))

// Aula 24 - Break e Continue
    // var x = 0;

    // while(x < 10) {
    //     console.log(x);
    //     x++;

    //     if (x == 5) {
    //         break; 
    //     }
    // }

    // var lista = [1,5,7,9, 23, 55, 33, 88, 123, 223, 545, 991, 3400, 100];

    // for(var a = 0; a < lista.length; a++) {
    //     if (lista[a] == 33) {
    //         console.log('Valor encontrado');
    //         break;
    //     }
    //     console.log(`Tentativa: ${a}`);
    // }

    // var numero = 0;

    // while(numero < 20) {

    //     if(numero == 3){
    //         numero++;
    //         continue;
    //     }

    //     console.log(numero);
    //     numero++;
    // }

    // while(numero < 20) {
    //     numero++;
    //     if(numero % 2 == 0) {
    //         continue;
    //     }
    //     console.log(numero);
    // }

// Aula 25 - Formularios
    // Select Box
        document.getElementById('mostrar_opcao').onclick = function () {
        
        var campo_select = document.getElementById('options');
        var indice_selecionado = campo_select.options.selectedIndex;
        var valor_selecionado = campo_select.options[indice_selecionado].innerHTML;
        document.getElementById('opcao_selecionada').innerHTML = valor_selecionado;

        var valor_selecionado = document.getElementById('options').value;
        document.getElementById('opcao_selecionada').innerHTML = valor_selecionado;
        }

        // Radio Buttons
        // document.getElementById("mostrar_radio").onclick = function () {

        //     var radio = document.getElementsByName('genero');

        //     var radio_selected;

        //     for(var a = 0; a < radio.length; a++) {
        //         if (radio[a].checked) {
        //             radio_selected = radio[a].value;
        //             break;
        //         }
        //     }
        //     document.getElementById("radio_selecionado").innerHTML = radio_selected;
    
        // };
        // CheckBoxes
            // document.getElementById("mostrar_check").onclick = function () {

            //     document.getElementById('check_selecionado').innerHTML = "";

            //     var check = document.getElementsByName('interesse');

            //     for(var b = 0; b < check.length; b++) {
            //         if (check[b].checked) {
            //             document.getElementById('check_selecionado').innerHTML += '<li>' + check[b].value + '</li>';
            //         }
            //     }
        // }
        // Date
        // document.getElementById("mostrar_data").onclick = function () {
        //     var data_select = document.getElementById('data_evento').value;
        //     var data_completa = new Date(data_select);
        //     document.getElementById('data_selecionada').innerHTML = data_completa;
        // }

// Aula 26 - Evento onchange
    // document.getElementById("escolaridade").onchange = function () {

    //     var campo_select = document.getElementById("escolaridade");
    //     var indice_selecionado = campo_select.options.selectedIndex;
    //     var valor_selecionado = campo_select.options[indice_selecionado].innerHTML;
    //     document.getElementById("escolaridade_selecionada").innerHTML = valor_selecionado;
    // };

    // Checkbox
    // var check = document.getElementsByName("lanche");

    // for (var a = 0;  a < check.length; a++) {

    //     check[a].onchange = function () {

    //         document.getElementById("check_selecionado").innerHTML = "";
            
    //         for (var b = 0;  b < check.length; b++) {
                
    //             if (check[b].checked) {
    //                 document.getElementById("check_selecionado").innerHTML += '<li>' + check[b].value + '</li>';
    //             }
    //         }
    //     }  
    // }

// Aula 27 - Funções CallBack
    // function pegar_usuario(callback){
    
    //     setTimeout(function(){
    //         var u = {
    //             'nome': 'João'
    //         };
    //         callback(u)
    //     }, 2000)

    // }   
        
    // function saudar_usuario(user) {
    //     console.log('Olá ' + user.nome + ', como vai?');        

    // }
            
    // pegar_usuario(function(user){
    //     console.log('Olá ' + user.nome + ', como vai?');        
    // });

// Aula 28 - Lidando com erros(Try, Catch e Throw)
    // function pegar_usuario(){

    //     window.setTimeout(function(){
    //         var u = {
    //             'nome': 'João'
    //         };
    //         return u;
    //     }, 1000);
        
    // }
            
    // function saudar_usuario(user) {
    //     console.log('Olá ' + user.nome + ', como vai?');
    // }

    // var user = {'nome': ''};
    
    // try {

    //     if(user.nome == '') {
    //         throw 'Nome em branco';
    //     }

    // saudar_usuario(user);
    // } catch(err) {
    //     console.log(err);
    // }

    // } finally {
    //     console.log('Este comando será sempre executado!');
    // console.log('Novo comando para executar ao final');
    // }

// Aula 29 - If ternário
    // var nome = "";

    // if (nome) {
    //     var mensagem = "Olá " + nome;
    // } else {
    //     var mensagem = "Nome não informado";
    // }

    // var mensagem;
    // nome ? mensagem = "Olá " + nome : mensagem = "Nome não informado";

    // mensagem = nome ? "Olá " + nome : "Nome não informado";
    // console.log(mensagem)

    // nome = 'Jean';
    // idade = 35;

    // mensagem = (nome && idade) ? "Olá " + nome + ", você tem " + idade + " anos."
    // : (!nome && !idade) ? "Nome e idade não informados."
    // : (!idade) ? "Idade não informada."
    // : "Nome não informado";

    // console.log(mensagem);

// Aula 30 - Escopo

    // var nome;

    // function criar_nome() {
    //     nome = 'Maria';
    //     console.log(nome); // O console mostrará 'Maria'
    // }

    // criar_nome();
    // console.log(window.nome);

    // var x = 0;

    // if(x == 0) {
    //     let nome = "Mariana";
    // }

    // console.log(nome);

    // for(let a = 0; a < 5; a++) {
    //     console.log(a);

    // }

    // const PI = "3.14159";
    // PI = 0;

// Aula 31 - Namespaces

    // var meuWebApp = {

    //     'nome' : 'Jean',
    //     'verNome' : function() {
    //         console.log(meuWebApp.nome);
    //     }
    // }

    // meuWebApp.nome = "Jean";
    
    // meuWebApp.verNome = function() {
    //     console.log(meuWebApp.nome);
    // }

    // meuWebApp.verNome()

    // var meuWebApp = (function(){
    //     var nome = "Jean";
    //     return {
    //         ver_nome : function() {
    //             return nome;
    //         },
    //         mudar_nome : function(novo_nome) {
    //             nome = novo_nome;
    //         },
    //         apagar_nome : function() {
    //             nome = null;
    //         }
    //     }
    // })();

    // meuWebApp.mudar_nome("João");
    // console.log(meuWebApp.ver_nome());

    // meuWebApp.apagar_nome();
    // console.log(meuWebApp.ver_nome());

// Aula 32 - JSON
    // var funcionario = {
    //     'nome': "Fernanda Costa",
    //     'd_nascimento': '1988-10-01',
    //     'CPF': '111.111.111-11'
    // };

    // var funcionario_json = JSON.stringify(funcionario);
    // // console.log(funcionario_json);

    // var funcionario_object = JSON.parse(funcionario_json);
    // console.log(funcionario_object.nome);


