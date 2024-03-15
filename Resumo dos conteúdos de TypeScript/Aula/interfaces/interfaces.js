"use strict";
var Interfaces;
(function (Interfaces) {
    function saudarComOla(pessoa) {
        console.log(`Olá, ${pessoa.nome}`);
    }
    Interfaces.saudarComOla = saudarComOla;
    function mudarNome(pessoa) {
        pessoa.nome = 'Jean';
    }
    Interfaces.mudarNome = mudarNome;
    const pessoa = {
        nome: 'João',
        idade: 27,
        saudar(sobrenome) {
            console.log(`Meu nome é: ${this.nome} ${sobrenome}`);
        }
    };
    saudarComOla(pessoa);
    mudarNome(pessoa);
    saudarComOla(pessoa);
    // saudarComOla({nome: 'Jonas', idade: 27, altura: 1.75})
    pessoa.saudar('Skywalker');
    // Usando classes
    class Cliente {
        constructor() {
            this.nome = '';
            this.ultimaCompra = new Date;
        }
        saudar(sobrenome) {
            console.log(`Meu nome é: ${this.nome} ${sobrenome}`);
        }
    }
    const meuCliente = new Cliente();
    meuCliente.nome = 'Han';
    saudarComOla(meuCliente);
    meuCliente.saudar('Solo');
    console.log(meuCliente.ultimaCompra);
    let potencia;
    potencia = function (base, exp) {
        // return Math.pow(base, exp)
        return Array(exp).fill(base).reduce((t, a) => t * a);
    };
    console.log(potencia(4, 2));
    // Herança
    // interface A {
    //     a(): void
    // }
    // interface B {
    //     b(): void
    // }
    // interface ABC extends A,B {
    //     c(): void
    // }
    // class RealA implements A {
    //     a(): void {}
    // }
    // class RealAB implements A,B {
    //     a(): void {}
    //     b(): void {}
    // }
    // class RealABC implements ABC {
    //     a(): void {}
    //     b(): void {}
    //     c(): void {}
    // }
    // function teste(b: B){
    // }
    // teste(new RealABC)
    // abstract class AbstrataABD implements A,B {
    //     a(): void {}
    //     b(): void {}
    //     abstract d(): void
    // }
    function log(obj) {
        console.log(obj.toString());
    }
    const a = 2;
    const b = 3;
    const c = 4;
    log(a);
    log(b);
    log(c);
    const cli = {
        nome: 'João',
        toString() {
            return this.nome;
        }
    };
    log(cli);
})(Interfaces || (Interfaces = {}));
//# sourceMappingURL=interfaces.js.map