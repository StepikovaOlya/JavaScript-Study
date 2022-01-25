"use strict";

console.log('lesson5');

// console.log('Request data...');
//
// setTimeout(() => {
//     console.log('Prepared data...');
//
//     const beckendData = {
//         server: 'aws',
//         api: '123',
//         port: '2000'
//     };
//
//     setTimeout(() => {
//         beckendData.modified = true;
//             console.log('Received data', beckendData);
//         }, 2000)
//
//     }, 2000);

const p = new Promise(function (resolve, reject) {
    setTimeout(() => {
        console.log('Prepared data...');

        const beckendData = {
            server: 'aws',
            api: '123',
            port: '2000'
        };
        resolve(beckendData);
    }, 2000);
})

p.then(function (data) {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            data.modified = true
            resolve(data)
        }, 2000);
    })
}).then(cliData => {
    cliData.fromPromise = true
    return cliData
}).then(data => {
    console.log('New data', data);
})


const sleep = ms => {
    return new Promise(resolve => {
        setTimeout(() => resolve(), ms)
    })
}

sleep(2000).then(() => console.log('after 2 sec'));
sleep(3000).then(() => console.log('after 3 sec'));

Promise.all([sleep(2000), sleep(3000)]).then ( () => {
    console.log('all promise');
})

Promise.race([sleep(2000), sleep(3000)]).then ( () => {
    console.log('race promise');
})
