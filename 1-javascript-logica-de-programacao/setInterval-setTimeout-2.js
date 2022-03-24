function mostrarHoras() {
    let data = new Date();

    return data.toLocaleTimeString("pt-BR", {
        hour12: false,
    });
};
// setInterval executando a funçao a cada 1 segundo
const timer = setInterval(() => {
    console.log(mostrarHoras());
}, 1000);

// setTimeout executando a função a ate chegar 10 segundos
setTimeout(() => {
    clearInterval(timer);
}, 10000);
