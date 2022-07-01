const names = ['Rodrigo', 'Maria', 'Pedro', 'Ana']
// const removeName = names.splice(3, 1)
// or
// const removeName = names.splice(-1, 1) // índice e elemento
const removeName = names.splice(-2, 2)
console.log(names, removeName)


const names1 = ['Rodrigo', 'Maria', 'Pedro', 'Ana']

const addName = names1.splice(3, 0, 'Luke')
console.log(names1, addName)