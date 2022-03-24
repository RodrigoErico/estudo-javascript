const soma = (x, y) => {
    if (typeof x !== "number" || typeof y !== "number") {
        throw new Error ("x e y precisam ser numeros"); // new Erro função construtora
    }
    return x + y;
};

try {
    console.log(soma(3, "3"));
} catch (error) {
    console.log("Usando assim para usuario - front end")
    console.log(error);
}

// se ouver erro no bloco try será executado o catch
// se nao ouver erro no bloco try, somente o try sera executado 