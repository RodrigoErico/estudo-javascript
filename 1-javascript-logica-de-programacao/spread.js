const myArray = [23, 24, 90, 45, 90, 60];

function valueOne(arr) {
    const mySet = new Set(arr);

    return [...mySet]; // ... spread
}

console.log(valueOne(myArray))