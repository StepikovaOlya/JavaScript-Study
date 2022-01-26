"use strict";

const people = [
    {name: 'Olha', age: 32, account: 7000 },
    {name: 'Tolya', age: 33, account: 9000 },
    {name: 'Alex', age: 5, account: 1000 },
    {name: 'Sam', age: 22, account: 5000 },
    {name: 'Nick', age: 42, account: 8000 }
]

// simple loop

for (let i = 0; i < people.length; i++) {
    console.log('for', people[i]);
}
for (let person of people) {
    console.log('for of', person);
}

// ForEach

people.forEach(function (person) {
    console.log('forEach1', person);
})

people.forEach(person => console.log('forEach2', person))

// Map - повертає новий масив у форматі, який ти задаєщ

const newPeople = people.map(person => person.account > 2000 ? person.account : null)
console.log('map', newPeople)

// Filter - повертає новий масив з умовами, які задані
const agree = people.filter(person => person.age >= 18)
console.log('filter', agree)

// Reduce - рахує сумму

const sum = people.reduce((total, person) =>  total + person.account, 0)

console.log('reduce', sum)

// Find

const olha = people.find(person => person.name === 'Olha')

console.log('find', olha)

const newPeople1 = people
    .filter(person => person.account >= 5000)
    .map(person => {
        return {
            info: `${person.name}`,
            info2: person.name + ' ' + person.age,
        }
    })

console.log(newPeople1);
