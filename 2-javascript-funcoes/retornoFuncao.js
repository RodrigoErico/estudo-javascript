// return - retorna um valor quando a funcao termina

function criaMultiplicador(mult) {
  return function (num) {
    return num * mult;
  };
}

const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
/*
function duplica(num) {
    return num * 2
}
function triplica(num) {
  return num * 3;
}
*/
console.log(duplica(4));
console.log(triplica(3));
