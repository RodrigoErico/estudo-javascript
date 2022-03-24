let vegetais = ["Repolho", "Nabo", "Rabanete", "Cenoura"];

for (let veg of vegetais) { // in em vez de of mostraria apenas os indices
    
    if (veg === "Nabo") {
        console.log('Foi excluido!')
        continue;         // continue => faz retornar o codigo a cima
    }

    if (veg === "Rabanete"){
        console.log("Encontrou o Rabanete aqui!")
        break; // para o laço e nao exibi o item da condição
    }

    console.log(veg)
}
