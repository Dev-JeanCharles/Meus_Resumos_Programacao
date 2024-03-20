const cpfAprovados = `
CPF dos aprovados:
    - 600.567.890-12
    - 765.998.345.23
    - 158.514.687-00
`

console.log(cpfAprovados.match(/\d{3}\.\d{3}\.\d{3}-\d{2}/g))
