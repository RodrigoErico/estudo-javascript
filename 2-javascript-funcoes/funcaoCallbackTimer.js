// Criar uma função que gere um numero aleatorio e distribua nas outras funções
function rand(min = 1000, max = 3000) {
  const number = Math.random() * (max - min) + min;
  return Math.floor(number);
}
function func1(callback) {
  setTimeout(function () {
    console.log("Função 1");
    if (callback) callback();
  }, rand());
}

function func2(callback) {
  setTimeout(function () {
    console.log("Função 2");
    if (callback) callback();
  }, rand());
}
function func3(callback) {
  setTimeout(function () {
    console.log("Função 3");
    if (callback) callback();
  }, rand());
}
/*
func1(function () {
  func2(function () {
    func3(function () {
      console.log("Dentro do callback hell");
    });
  });
});
*/
// Refatorando
func1(callback01);

function callback01() {
  func2(callback02);
}

function callback02() {
  func3(callback03);
}

function callback03() {
  console.log("Fim!");
}

console.log("Sou executado primeiro");
