"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var WorkingDecorators;
(function (WorkingDecorators) {
    // function logarClasse(construtor: Function) {
    //     console.log(construtor)
    // }
    // @logarClasse
    // @logarClasseSe(true)
    // @decorator({a: 'Teste'})
    // @logarObjeto
    // @imprimivel
    class Eletrodomestico {
        constructor() {
            console.log('Novo...');
        }
    }
    // function imprimivel(construtor: Function) {
    //     construtor.prototype.imprimir = function() {
    //         console.log(this)
    //     }
    // }
    // (<any>new Eletrodomestico()).imprimir()
    const eletro = new Eletrodomestico();
    eletro.imprimir && eletro.imprimir();
    // Desafio Decorator perfilAdmin
    const usuarioLogado = {
        nome: 'Guilherme Filho',
        email: 'guigui@gmail.com',
        admin: true
    };
    function perfilAdmin(construtor) {
        return class extends construtor {
            constructor(...args) {
                super(...args);
                if (!usuarioLogado || !usuarioLogado.admin) {
                    throw new Error('Sem permissão de admnistrador');
                }
            }
        };
    }
    let MudancaAdministrativa = class MudancaAdministrativa {
        critico() {
            console.log('Algo crítico foi alterado!');
        }
    };
    MudancaAdministrativa = __decorate([
        perfilAdmin
    ], MudancaAdministrativa);
    new MudancaAdministrativa().critico();
    class contaCorrente {
        constructor(saldo) {
            this.saldo = saldo;
        }
        // Decorator Parametro
        sacar(valor) {
            if (valor <= this.saldo) {
                this.saldo -= valor;
                return true;
            }
            else {
                return false;
            }
        }
        getSaldo() {
            return this.saldo;
        }
    }
    __decorate([
        naoNegativo
    ], contaCorrente.prototype, "saldo", void 0);
    __decorate([
        congelar
        // Decorator Parametro
        ,
        __param(0, paramInfo)
    ], contaCorrente.prototype, "sacar", null);
    __decorate([
        congelar
    ], contaCorrente.prototype, "getSaldo", null);
    const cc = new contaCorrente(107884.54);
    cc.sacar(5000);
    cc.sacar(102884.54);
    cc.sacar(0.4);
    console.log(cc.getSaldo());
    // cc.getSaldo = function() {
    //     return this['saldo'] + 7000
    // }
    // console.log(cc.getSaldo())
    // Object.freeze()
    // Decorator Método
    function congelar(alvo, nomeMetodo, descritor) {
        console.log(alvo);
        console.log(nomeMetodo);
        descritor.writable = false;
    }
    // Decorator Atributo
    function naoNegativo(alvo, nomePropriedade) {
        delete alvo[nomePropriedade];
        Object.defineProperty(alvo, nomePropriedade, {
            get: function () {
                return alvo["_" + nomePropriedade];
            },
            set: function (valor) {
                if (valor < 0) {
                    throw new Error('Saldo inválido');
                }
                else {
                    alvo["_" + nomePropriedade] = valor;
                }
            }
        });
    }
    // Decorator Parametro
    function paramInfo(alvo, nomeMetodo, indiceParam) {
        console.log(`Alvo ${alvo}`);
        console.log(`Método: ${nomeMetodo}`);
        console.log(`Índice Param: ${indiceParam}`);
    }
})(WorkingDecorators || (WorkingDecorators = {}));
//# sourceMappingURL=decorator.js.map