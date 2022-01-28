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


// ajax

$(function () {
    $('#button').on('click', function () {
        $.ajax(requestURL, {
            success: function (data) {
                data.forEach(el => {
                    const test = document.createElement('div');
                    const randomColor = Math.floor(Math.random()*16777215).toString(16);
                    test.textContent = el.name;
                    test.id = el.id;
                    test.style.width = test.style.height = 100 + 'px';
                    test.style.background = '#' + randomColor;
                    test.style.display = 'inline-block';
                    // (+test.id % 2 === 0) ? test.style.background = 'blue' : test.style.background = 'red';
                    document.querySelector('body').appendChild(test);
                })
            }
        });
    });
});
