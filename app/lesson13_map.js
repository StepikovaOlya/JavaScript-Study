"use strict";

// map
const objPerson = {
    name: 'Max',
    age: 20
}

const arrPerson = [
    ['name', 'Max'],
    ['age', 20]
]

console.log(Object.entries(objPerson)) // конвертує об"єкт в масив
console.log(Object.fromEntries(arrPerson)) // конвертує масив в об"єкт

const map = new Map(arrPerson)  // конвертує масив в об"єкт

console.log(map);
console.log(map.get('name'));

map.set('new', 42)
map.delete('age')

console.log(map);
console.log(map.has('age'));
console.log(map.size);


// цикл по карті об"єкта, щоб дістати ключі і значення
for (let [key, value] of map) {
    console.log(key, value)
}

// цикл по карті об"єкта, щоб дістати значення
for (let val of map.values()) {
    console.log('value', val)
}

// цикл по карті об"єкта, щоб дістати ключі
for (let key of map.keys()) {
    console.log('key', key)
}

// цикл по карті об"єкта, щоб дістати ключі і значення
map.forEach((val, key, m) => console.log('foreach', val, key))


// конвертувати карту (map) у масив
const array = [...map]
console.log(array)

const users = [
    {name: 'Olha'},
    {name: 'Max'},
    {name: 'Alex'}
]

const visite = new Map()

visite
    .set(users[0], new Date())
    .set(users[1], new Date().getTime() + 1000 * 60)
    .set(users[2], new Date().getTime() + 5000 * 60)

function lastVisit(user) {
    return visite.get(user)
}

console.log(lastVisit(users[1]))