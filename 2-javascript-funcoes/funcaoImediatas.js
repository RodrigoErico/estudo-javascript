// IIFE

(function (a, b, c) {
  const sobrenome = "Érico";
  function criaNome(nome) {
    return nome + " " + sobrenome;
  }
  function falaNome() {
    console.log(criaNome("Rodrigo"));
  }
  falaNome();
  console.log(a, b, c);
})(1, 2, 3);
