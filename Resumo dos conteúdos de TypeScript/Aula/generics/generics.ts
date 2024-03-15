namespace WorkingGenerics {
    function echo(objeto: any) {
        return objeto
    }
    console.log(echo('Jean').length)
    console.log(echo(2).length)
    console.log(echo({nome: 'Jean', idade: 29}))

    // Usando Generics
    function echoMelhorado<TIPO>(objeto: TIPO): TIPO{
        return objeto
    }

    console.log(echoMelhorado('Jean').length)
    console.log(echoMelhorado<number>(2))
    console.log(echoMelhorado({nome: 'Jean', idade: 29}).nome)

    // Generics disponíveis na API

    const avaliacoes: Array<number> = [10,9.4,4.5,7.8]
    avaliacoes.push(8.4)
    // avaliacoes.push('6.6')
    console.log(avaliacoes)

    // Array
    function imprimir<T>(args: T[]) {
        args.forEach(elemento => console.log(elemento))
    }
    imprimir([1,2,3,4])
    imprimir<number>([1,2,3])
    imprimir<string>(['Bia','Jean','João'])
    imprimir<{nome: string, idade: number }>([
        {nome: 'Fulano', idade: 24},
        {nome: 'Cricrano', idade: 18},
        {nome: 'Beltrano', idade: 20}
    ])

    type Aluno = {nome: string, idade: number }
    imprimir<Aluno>([
        {nome: 'Fulano', idade: 24},
        {nome: 'Cricrano', idade: 18},
        {nome: 'Beltrano', idade: 20}
    ])
    
    // Tipo Genérico - Função
    type Echo = <T>(data: T) => T
    const chamarEcho: Echo = echoMelhorado
    console.log(chamarEcho<string>('Alguma coisa'))

    // Classe com Generics
    export abstract class OperacaoBinaria<T, R> {
        constructor(public operando1: T, public operando2: T) {}
        abstract executar(): R
    }
    // console.log(new OperacaoBinaria('Bom', ' Dia').executar())
    // console.log(new OperacaoBinaria(4, 6).executar())
    // console.log(new OperacaoBinaria(3, ' Opa').executar())
    // console.log(new OperacaoBinaria({}, {}).executar())

    export class SomaBinaria extends OperacaoBinaria<number,number> {
        executar(): number {
            return this.operando1 + this.operando2
        }
    }

    export class diferencaDatas extends OperacaoBinaria<Data, string> {
            getTime(data: Data): number {
                let { dia, mes, ano} = data
                return new Date(`${mes}/${dia}/${ano}`).getTime()
            }
            executar(): string {
                const t1 = this.getTime(this.operando1)
                const t2 = this.getTime(this.operando2)
                const diferenca = Math.abs(t1 - t2)
                const dia = 1000 * 60 * 60 * 24
                return `${Math.ceil(diferenca / dia)} dia(s)`
            }
        }
        const data1 = new Data(1, 2, 2024)
        const data2 = new Data(5, 9, 2018)
    
        console.log(new diferencaDatas(data1, data2).executar())
    
        console.log(new SomaBinaria(3,6).executar())
        console.log(new SomaBinaria(345,63).executar())

        // Desafio Classe Fila
        // Atributo: fila (Array)
        // Métodos: entrar, próximo, imprimir

        export class Fila<T extends number | string> {
            private fila: Array<T>

            constructor(...args: T[]) {
                this.fila = args
            }
            entrar(elemento: T) {
                this.fila.push(elemento)
            }
            proximo(): T | null {
                if(this.fila.length >= 0 && this.fila[0]) {
                    const primeiro = this.fila[0]
                    this.fila.splice(0, 1)
                    return primeiro
                } else {
                    return null
                }
            }
            imprimir() {
                console.log(this.fila)
            }
        }
        const fila = new Fila<string>('Guilherme', 'Pedro', 'Ana', 'Jean', 'Ricardo')
        
        fila.imprimir()
        fila.entrar('João')
        fila.imprimir()
        console.log(fila.proximo())
        console.log(fila.proximo())
        console.log(fila.proximo())
        fila.imprimir()

        const novaFila = new Fila<number>(2,4,9.8)
        novaFila.imprimir()

        // Desafio Mapa
        // Array de objetos (Chave/Valor) -> itens
        // Métodos: obter(Chave), colocar({ C, V })
        // limpar(), imprimir()

        type Par<C,V> = {chave: C, valor: V}
        
        export class Mapa<C,V> {
            private itens: Array<Par<C, V>> = []

            colocar(par: Par<C,V>) {
                const encontrado = this.obter(par.chave)
                if(encontrado) {
                    encontrado.valor = par.valor
                }else {
                    this.itens.push(par)
                }
            }
            obter(chave: C): Par<C,V> | null {
                const encontrado = this.itens.filter(i => i.chave === chave)
                return encontrado ? encontrado[0] : null
            }
            limpar() {
                this.itens = []
            }
            imprimir() {
                console.log(this.itens)
            }

        }

        const mapa = new Mapa<number, string>()
        mapa.colocar({ chave: 1, valor: 'Pedro' })
        mapa.colocar({ chave: 2, valor: 'Rebeca' })
        mapa.colocar({ chave: 3, valor: 'Maria' })
        mapa.colocar({ chave: 1, valor: 'Gustavo' })

        console.log(mapa.obter(2))
        mapa.imprimir()
        mapa.limpar()
        mapa.imprimir()

        // const outraFila = new Fila<boolean>(true, false)


        // export class Fila<T> {
        //     constructor(public fila: Array<T>) {}

        //     obterFila(): Array<T> {
        //         return this.fila
        //     }
        // }
        // const filaInicial = ['Jean', 'Bia', 'Logan', 'Vinicius']
        // const fila = new Fila<string>(filaInicial)
        // console.log(fila.obterFila().push('Julio'))
        // console.log(fila.obterFila().slice(1))
        // console.log(fila.obterFila())
    }