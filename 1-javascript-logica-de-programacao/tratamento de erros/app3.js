const soma = (x, y) => {
    if (typeof x !== "number" || typeof y !== "number") {
        throw "x e y precisam ser numeros";
    }
    return x + y;
};

try {
    console.log(soma(3, "3"));
} catch(error) {
    console.log(error)
}

