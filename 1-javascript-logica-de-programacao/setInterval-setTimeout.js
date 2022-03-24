// mostrar hora atual
//let data = new Date();
//console.log(data)

function mostrarHoras() {
    let data = new Date();

    return data.toLocaleTimeString("pt-BR", {
        hour12: false,
    });
}
// para executar a funçao precisa de parenteses, sem o pareteses apenas pegara a referencia
//console.log(mostrarHoras())

function funcaoDoInterval() {
    console.log(mostrarHoras());
}
setInterval(funcaoDoInterval, 1000); // sera executada a funçao a cada segundo
