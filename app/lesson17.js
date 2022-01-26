"use strict";

 const myNumber = 12
localStorage.setItem('number', myNumber.toString())
console.log(localStorage.getItem('number'))
localStorage.clear()

const myObj = {
     name: 'olha',
     age: 32
}

localStorage.setItem('person', JSON.stringify(myObj))

const raw = localStorage.getItem('person')
const person = JSON.parse(raw)
person.name = 'Olya'
console.log(person)

