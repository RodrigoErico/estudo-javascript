// veja se é maior de idade

const nome = "Rodrigo",
    idade = 31;

idade > 18
    ? (alert("ok, vc pode entrar"), console.log(nome + " entrou"))
    : (alert("Desculpe, vc nao pode entrar"),
      console.log(nome + " nao entrou"));
