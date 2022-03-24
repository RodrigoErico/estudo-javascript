const fruit = ['Banana', 'Goiaba', 'Melancia'];

//for (let i = 0; i < fruit.length; i++) {
//    console.log(fruit[i]);
//}

for (let i in fruit) {
    console.log(fruit[i])
}

const person = {
    name1: 'Rodrigo',
    age: '31',
    rg: '3455677'
}

for (let key in person) {
    console.log(key, person[key])
}