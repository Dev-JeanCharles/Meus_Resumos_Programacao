// Comandos principais terminal:
// npm start
// npm i -s {servidor}
// npm init -y
// tsc -w

// String 
let nome: string = 'Jean'
console.log(nome)
// nome = 28

// Numbers
let idade: number = 27
// idade = 'Jean'
idade = 27.5
console.log(idade)

// Boolean
let possuiHobbies: boolean = false
// possuiHobbies = 1
console.log(possuiHobbies)

// Tipos Explícitos
let minhaIdade: number
minhaIdade = 27
console.log(typeof minhaIdade)
// minhaIdade = 'idade é 27'
console.log(typeof minhaIdade)

// Array
let hobbies: any[] = ["Cozinhar", "Praticar esporte"]
console.log(typeof hobbies)

hobbies = [100, 200, 300, 400]
// hobbies = 100
console.log(hobbies)

// Tuplas
let endereco: [string, number, string] = ['Av principal', 99, ""]
console.log(endereco)

endereco = ["Rua importante", 1250, "Bloco A"]
console.log(endereco)

// Enums
enum Cor {
    Cinza,
    Verde = 100,
    Azul = 10,
    Laranja,
    Amarelo,
    Vermelho = 100
}

let minhaCor: Cor = Cor.Verde
console.log(minhaCor)
console.log(Cor.Azul)
console.log(Cor.Laranja, Cor.Amarelo)
console.log(Cor.Verde, Cor.Vermelho)

// Any
let carro: any  = "BMW"
console.log(carro)
carro = {marca: 'BMW', ano: 2019}
console.log(carro)

// Função
function retornaNome(): string {
    // return minhaIdade
    return nome
}
console.log(retornaNome())

function digaOi(): void {
    console.log('Oi')
    // return minhaIdade
}

digaOi()

function multiplicar(numA: number, numB: number): number {
    return numA*numB
}

// console.log(multiplicar(2, 'Jean'))
console.log(multiplicar(2.9, 4))

// Tipo Função
let calculo: (numeroA: number, numeroB: number) => number 
// calculo = digaOi
// calculo()

calculo = multiplicar
console.log(calculo(5,6))

// const teste = function teste(a: number, b: number): boolean {
//     return false
// }

// Objetos
let usuario: {nome: string, idade: number} = {
    nome: 'Jean',
    idade: 19
}
console.log(usuario)

// usuario = {}

// usuario = {
//     name: 'Maria'
//     age: 28
// }

usuario = {
    idade: 31,
    nome: "Maria"
}
console.log(usuario)

// Desafio Tipo Objetos

let funcionarios: Funcionario = {
    nome: ['Jean', 'João','Vitor', 'Charles'],
    baterPonto(horario: number): string {
        if(horario <= 8) {
            return 'Ponto normal'
        }else {
            return 'fora do horário'
        }
    }
} 

// Alias
type Funcionario = {
    nome: string[],
    baterPonto(horas: number): string
}

let funcionarios2: Funcionario = {
    nome: ['Jean', 'João'],
    baterPonto(horario: number): string {
        if(horario <= 8) {
            return 'Ponto normal'
        }else {
            return 'fora do horário'
        }
    }
} 

console.log(funcionarios.nome)
console.log(funcionarios.baterPonto(8))
console.log(funcionarios.baterPonto(10))

// Union Types
let nota: number | string = 10
console.log(`Minha nota é ${nota}!`)
nota = '10'
console.log(`Minha nota é ${nota}!`)

// Checando tipos
let valor = 30

if (typeof valor == 'number') {
    console.log('é um valor number')
} else {
    console.log(typeof valor)
}
// Função tipo Never: Para funções que não terminam corretamente, seja loop infinito
// Ou erros para validações
function falha (msg: string): never {
    throw new Error(msg)
}
const produto = {
    nome: 'sabao',
    preco: 8,
    validarProduto() {
        if(!this.nome || this.nome.trim().length == 0) {
            falha('Precisa ter um nome')
        }
        if(this.preco <= 0) {
            falha('Preco invalido')
        }
    }
}
produto.validarProduto()

// Valores opcionais com o tipo null
let altura = 12
// altura = null

let alturaOpcional: null | number = 12
alturaOpcional = null

type Contato = {
    nome: string,
    tel1: string,
    tel2: string | null
}

const contato1 : Contato = {
    nome: 'Jean',
    tel1: '21998301922',
    tel2: null
}

console.log(contato1.nome)
console.log(contato1.tel1)
console.log(contato1.tel2)

let podeserNulo = null // any
podeserNulo = 12
console.log(podeserNulo)
podeserNulo = 'abc'
console.log(podeserNulo)

// Desafio
type Correntista = {
    nome: string,
    contaBancaria: Conta
    contatos: Array<String>
}

type Conta = {
    saldo: number,
    depositar(valor: number): void
}

let contaBancaria: Conta = {
    saldo: 3456,
    depositar(valor) {
        this.saldo += valor
    },
}

let correntista: Correntista = {
    nome: 'Ana Silva',
    contaBancaria: contaBancaria,
    contatos: ['34567890', '98765432'],
}


correntista.contaBancaria.depositar(3000)
console.log(correntista)
