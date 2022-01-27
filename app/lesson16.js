"use strict";

function calcValues(a, b) {
    return [
        a + b,
        a - b,
        a * b,
        a / b
    ]
}

console.log(calcValues(42, 10))

// старий підхід
const result = calcValues(42, 10)
const sum1 = result[0]
const sub1 = result[1]
console.log(sum1, sub1)

// новий підхід, скорочення коду, наз деструктуризація
// (змінні у новому масиві - const [sum2, sub2, sub3]  дорівнюють індексам у масиві, який деструктуризуєш)
// const [sum2, sub2, mult2] = calcValues(42, 10)
// console.log(sum2, sub2, mult2)


//якщо потрібно щось пропустити, то ставимо кому
// const [sum2,, mult2] = calcValues(42, 10)
// console.log(sum2, mult2)


// можна додати оператор рест ...other і вивести нові масиви інших індексів
const [sum2,, mult2, ...and] = calcValues(42, 10)
console.log(sum2, mult2, and)


// значення по дефолту, якщо у масиві буде undefined -  sub = 'Вычитания нет'
const [sum, sub = 'Вычитания нет', mult, ...other] = calcValues(42, 10)
console.log(sum, mult, other, sub)

// Objects
const person = {
    name: 'Max',
    age: 20,
    address: {
        country: 'Russia',
        city: 'Moscow'
    }
}

// const name1 = person.name це теж саме, що const {name} = person
// const name1 = person.name
// const {name} = person
// console.log(name1, name)
// output Max Max




console.log(firstName, car)

// const {name, ...info} = person
// console.log(name, info)

function logPerson({name: firstName = '111', age}) {
    console.log(firstName + ' ' + age)
}

logPerson(person)
