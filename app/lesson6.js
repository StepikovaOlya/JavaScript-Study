"use strict";


// simple Object

const person2 = {
    name: 'Olha',
    year: 1989
}

console.log(person2);

for (let key in person2) {
    console.log('Key', key);

}

// method Object create

const person = Object.create(
    {
        calculateAge() {
            console.log('test')
            return true
        }
    },
    {
    name: {
        value: 'Olha',
        enumerable: true, // значення дозволяє виводити ключ у циклі
        writable: true, // дозволяє перезаписувати значення на нове
        configurable: true // дозволяє видаляти ключі
    },
    year: {
        value: 1989,
        enumerable: true,
        writable: false
    },
    age: {
        get() {
            return new Date().getFullYear() - this.year
        },
        set (value) {
            document.body.style.background = 'red'
            console.log('Your age', value)
        }
    }
})

console.log(person);
console.log(person.calculateAge());

for (let key in person) {
    console.log('Key', key, person[key]);
}




