// Usar Arrow
const pessoa1 = {
    nome: "Rodrigo",
    sayName: function() {
        console.log(this.nome)
    }
}

pessoa1.sayName()

const pessoa2 = {
    nome: "José",
    sayName() {
        console.log(this.nome)
    }
}

pessoa2.sayName()

// Não  usar Arrow

const pessoa3 = {
    nome: "Pedro Mané",
    sayName: () => {
        console.log(this.nome)
    }
}

pessoa3.sayName() // undefined

