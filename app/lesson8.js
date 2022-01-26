"use strict";
const delay = ms => {
    return new Promise(r => setTimeout(() => r(), ms))
}

delay(2000).then(() => console.log('2 sec')) // demo

const url = 'https://jsonplaceholder.typicode.com/todos' // тестовий json

function fetchTodos() {
    console.log('fetch')
    return delay(2000)
        .then(() => fetch(url))
        .then(response => response.json())
}

fetchTodos()
    .then(data => {
    console.log('Data', data)
})
    .catch(e => console.error(e))

async function fetchAsync() {
    console.warn('test')
    try {
        await delay(2000)
        const response = await fetch(url)
        const data = await response.json()
        console.log('Data', data)
    } catch (e) {
        console.error(e)
    } finally {
        // виконається по дефолту, навіть якщо помилки
    }

}
fetchAsync()

// fetchAsync() і fetchTodos() роблять однакові запити, просто в fetchAsync() синтаксис простіший.
// fetch - запит подібний до ajax
// await - довзволяє обробляти проміси, тобто дає затримку
// async - так має оголошуватися функція, щоб всі ці методи працювали
