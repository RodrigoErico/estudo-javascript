// argumentos
 const semArg = () => console.log("Sem Argumentos!")
 semArg()


 // com 1 argumento
const comArg = "Com Argumento!"
const fraseArray = (comArg) => comArg.split(' ')

console.log(fraseArray(comArg))

// com 2 argumentos 

const num1 = 10
const num2 =  5
const soma = (a , b) => a + b;

console.log(soma(num1, num2))

// casos de uso
const roupas = [
    {produto: 'Camisa', preco: 34},
    {produto: 'Camisa polo', preco: 120},
    {produto: 'Camisa regata', preco: 22},
    {produto: 'Camisa manga longa', preco: 233},
    {produto: 'Calça', preco: 99}
]

const precoMaior = roupas.filter((precoDaRoupa) => {
    return precoDaRoupa.preco >= 100;
});

console.log(precoMaior)

