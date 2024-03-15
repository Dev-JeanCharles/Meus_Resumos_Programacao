let canal: string = 'Gaveta'
let inscritos:number = 5300022

// canal = inscritos
console.log(`Canal = ${canal}`)

// let nome:string = 'Pedro'

// Evitando Any Implícito

function soma(a: any, b: any) {
    return a+b
}

let qualquerCoisa
qualquerCoisa = 12
qualquerCoisa = 'abc'

function saudar(isManha: boolean) {
    let saudacao: string
    if(isManha) {
        saudacao = 'Bom dia!'
    } else {
        saudacao = 'Boa vida!'
    }
    return saudacao
}
