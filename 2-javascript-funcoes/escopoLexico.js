// a funçao busca a variavel dentro dela e se nao encontrar busca no seu escopo global
const nome = "Luiz";

function falaNome() {
  console.log(nome);
}

function mostraNome() {
  const nome = "Rodrigo";
  falaNome();
}
mostraNome();
