// condition ? expr1 : expr2
// condition – Uma expressão que é avaliada como verdadeiro (true) ou falso (false).
// expr1, expr2 – Expressões com valores de qualquer tipo.

const max = (x, y) => (x > y ? x : y);
console.log(max(1, 2));

// ternario com 3 condiçoes
var salario = 5000;

var cargo =
    salario <= 2000
        ? "Programador Junior"
        : salario <= 6000
        ? "Programador Pleno"
        : "Programador Sênior";

console.log(cargo);
