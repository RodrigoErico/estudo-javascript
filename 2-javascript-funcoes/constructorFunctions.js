// Função construtora cria objetos
// Construtora -> Pessoa (new)

function Pessoa(nome, sobrenome) {
  // Atributos ou métodos Privados
  const id = 12345;
  const metodoInterno = function () {};

  // Atributos ou métodos públicos
  this.nome = nome;
  this.sobrenome = sobrenome;

  this.metodo = function () {
    console.log(this.nome + ": sou um método");
  };
}

const person01 = new Pessoa("Rodrigo", "Érico");

person01.metodo()
console.log(person01.sobrenome);
