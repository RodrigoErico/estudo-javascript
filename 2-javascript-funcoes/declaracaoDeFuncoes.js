// Declaração de função (Function hoisting)
// posso chamar a funçao  antes ou depois
falaOi();

function falaOi() {
  console.log("Oi");
}

// First-class objects (Objetos de primeira classe)
// Function expression
// Função sem nome = função anonima
const falaTchau = function () {
  console.log("Tchau");
};
falaTchau();

function executaFuncao(func) {
  func();
}
executaFuncao(falaTchau);

// Arrow function
const functionArrow = () => {
  console.log("Sou Arrow Function");
};
functionArrow();

// Dentro de um objeto
const obj = {
  escreva() {
    console.log("Começando um texto...");
  },
};
obj.escreva();
