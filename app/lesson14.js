"use strict";

const requestURL = 'https://jsonplaceholder.typicode.com/users'

function sendRequest(method, url, body = null) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest()

        xhr.open(method, url)

        xhr.responseType = 'json'
        xhr.setRequestHeader('Content-Type', 'application/json')

        xhr.onload = () => {
            if (xhr.status >= 400) {
                reject(xhr.response)
            } else {
                resolve(xhr.response)
            }
        }

        xhr.onerror = () => {
            reject(xhr.response)
        }

        xhr.send(JSON.stringify(body))
    })
}

sendRequest('GET', requestURL)
    .then(data => console.log(data))
    .catch(err => console.log(err))

const body = {
    name: 'Vladilen',
    age: 26
}

sendRequest('POST', requestURL, body)
    .then(data => console.log(data))
    .catch(err => console.log(err))


$.ajax(requestURL, {
    success: function (data) {
        console.log(data);
        data.forEach(el => {
            const test = document.createElement('div');
            test.className = el.name;
            test.id = el.id;
            test.style.width = test.style.height = el.id *10 + 'px';

            (+test.id % 2 === 0) ? test.style.background = 'blue' : test.style.background = 'red';

            document.querySelector('body').appendChild(test);
        })
    }
});