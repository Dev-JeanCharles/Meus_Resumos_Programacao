// Exercício 1 - Classe
class Moto {
    constructor(public nome: string, public velocidade: number = 0) {

    }

    buzinar() {
        console.log('Toooooooooot!')
    }
    
    acelerar(delta: number): number {
        return this.velocidade =  this.velocidade + delta
    }
}

var moto = new Moto('Ducati')
moto.buzinar()
console.log(moto.velocidade)
moto.acelerar(30)
console.log(moto.velocidade)

// Exercício 2 - Herança
    abstract class Objeto2d {
        constructor(public base: number = 0, public altura: number = 0) {
        }
        abstract area():number
    }
    
    class retangulo extends Objeto2d {
        area(): number {
            return this.base * this.altura
        }
    }
    
    const Retangulo =  new retangulo(8,7)
    console.log(Retangulo.area())

    
// Exercício 3 - Getters & Setters
// var estagiario = {
//     _primeiroNome: ''
// }

// Object.defineProperty(estagiario, 'primeiroNome', {
//     get: function () {
//         return this._primeiroNome
//     },
//     set: function (valor) {
//         if (valor.length >= 3) {
//             this._primeiroNome = valor
//         } else {
//             this._primeiroNome = ''
//         }
//     },
//     enumerable: true,
//     configurable: true
// })

// console.log(estagiario.primeiroNome)
// estagiario.primeiroNome = 'Le'
// console.log(estagiario.primeiroNome)
// estagiario.primeiroNome = 'Leonardo'
// console.log(estagiario.primeiroNome)

class Estagiario {
    constructor(private _primeiroNome: string = '') {}

    
    public get primeiroNome() : string {
        return this._primeiroNome
    }
    
    public set primeiroNome(valor : string) {
        if (valor.length >= 3) {
            this._primeiroNome = valor
        }else {
            this._primeiroNome = ''
        }
    }
}

const estagiario = new Estagiario
console.log(estagiario.primeiroNome)
estagiario.primeiroNome = 'Le'
console.log(estagiario.primeiroNome)
estagiario.primeiroNome = 'Leonardo'
console.log(estagiario.primeiroNome)