"use strict";

const set = new Set([1, 2, 3, 3, 3, 5, 5])
console.log(set) // не виводить значення дублікати

set.add(10).add(20)
console.log(set.has(42))
console.log(set.size)
console.log(set.values())
console.log(set.keys())



function uniqVal(array) {
    return [...new Set(array)]
}

console.log(uniqVal([1, 1, 1, 1, 2, 2, 5]));