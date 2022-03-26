// 3 escopos
function retornaFuncao() {
  const nome = "Rodrigo";
  return function () {
    // funcao anonima
    return nome;
  };
}

const funcao = retornaFuncao();
console.log(funcao);
console.log(funcao());
