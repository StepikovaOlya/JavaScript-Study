"use strict";

const slides = document.querySelectorAll('.slide')

for (const slide of slides) {
    slide.addEventListener('click', () => {
        clearActiveClasses()
        slide.classList.add('active')
    })
}

function clearActiveClasses() {
    slides.forEach((slide) => {
        slide.classList.remove('active')
    })
}


Promise.race([sleep(2000), sleep(3000)]).then ( () => {
    console.log('race promise');
})

// var user = {};
// console.log(user);
//
// user.name = "John";
// user.surname = "Smith";
// user.name = "Petr";
// delete user.name;
//
//
// console.log(user);
//
// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
// };
// console.log( salaries[key] );


// let calculator = {
//     x: 1,
//     y: 2,
//
//   read: function () {
//       console.log( this.x, this.y );
//   },
//
//     sum: function () {
//         return this.x + this.y;
//     },
//
//     mul: function () {
//         return this.x * this.y;
//     },
//
// };
//
// calculator.read();
// alert( calculator.sum() );
// alert( calculator.mul() );

let calculator = {
    sum() {
        return this.a + this.b;
    },

    mul() {
        return this.a * this.b;
    },

    read() {
        this.a = +prompt('a?', 0);
        this.b = +prompt('b?', 0);
    }
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );
