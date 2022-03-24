let numbers = [1, 13.4, 13.7, 14]
numbers.forEach(function(item, indice) {
    console.log(`${item} => ${indice}`)
})

console.log(' ')

let numbers2 = [1, 13.4, 13.7, 14]
numbers2.forEach(function(item2, indice2) {
    console.log(`${item2} => ${indice2 + 1}`)
})

console.log(' ')

var numbers3 = [1, 13.4, 13.7, 14]
numbers3.forEach((elemento, indice) => console.log(`O item ${indice + 1} é ${elemento}`));


