/*
Escreva uma função que recebe um numero e retorne:
Numero e´divisivel por 3 = Fizz
Numero é divisivle por 5 = Buzz
Numero e´divisivel por 3 e 5 FizzBuzz
Nnumero Não é divisivel por 3 e 5 = Retorna o proprio numero
Checar se o numero é realmente um numero = Retorna o proprio
Use a funcão com numeors de 0 a 50
*/

// n= é o numero atestar a divisibilidade.
// d= é o divisor.
function fizzBuzz(n) {
    if (typeof n !== "number") return n;
    if (n % 3 === 0 && n % 5 === 0) return "FizzBuzz";
    if (n % 3 === 0) return "Fizz";
    if (n % 5 === 0) return "Buzz";

    return n;
}

for (let i = 0; i <= 50; i++) {
    console.log(fizzBuzz(i));
}
