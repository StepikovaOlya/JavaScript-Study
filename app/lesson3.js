"use strict";

console.log('lesson3');

 function createCalcFunction(n) {
     return function () {
         console.log(1000 * n);
     };
 }

const calc = createCalcFunction(2);
 calc();

 function createInc(n) {
     return function (num) {
         return n + num;
     };
 }

 const addOne = createInc(1);
 const addTen = createInc(10);

console.log(addOne(10)); // 11
console.log(addOne(5)); // 6
console.log(addTen(10)); // 20
console.log(addTen(5)); // 15

function urlGenerator(domain) {
    return function (url) {
        return `https://${url}.${domain}`;
    };
}

const domainCom = urlGenerator('com');
const domainRu = urlGenerator('ru');

console.log(domainCom('test')); // https://test.com
console.log(domainRu('test2')); // https://test.ru
