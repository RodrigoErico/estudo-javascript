// não funciona arguments para arrow function
function func1() {
  console.log("Oi");
}
func1("texto"); // javascript ignora os argumentos aqui e nao da erro

function func2() {
  console.log(arguments[0]); // cria objetos como resultado
}
func2("texto", 34);

function soma(a, b = 2, c = 3) {
  console.log(a + b + c);
}
soma(2, 900); // o valor de b foi subtituido por 20

// Spread Operator
/*
function conta(operador, acumulador, ...numeros) {
    console.log(operador, acumulador, numeros)
}
conta('+', 0, 20, 30, 40, 50)*/

// function expression
const conta = function (operador, acumulador, ...numeros) {
  for (let num of numeros) {
    if (operador === "+") acumulador += num;
    if (operador === "-") acumulador -= num;
    if (operador === "/") acumulador /= num;
    if (operador === "*") acumulador *= num;
  }
  console.log(acumulador);
};
conta("+", 1, 20, 30, 40, 50);

// arrow function resto

const teste = (a, ...args) => {
  console.log(a, args);
};
teste("Testando", "Argumentos", "Arrow function", 123);
