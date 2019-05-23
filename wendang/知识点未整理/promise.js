var a = function () {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve('a')
        }, 1000)
    })
}

// 异步函数b
var b = function (data) {
    return new Promise(function (resolve, reject) {
        resolve(data + 'b')
    })
}

// 异步函数c
var c = function (data) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve(data + 'c')
        }, 500)
    })
}
function queue(arr) {
    var sequence = Promise.resolve()
    arr.forEach(function (item) {
        sequence = sequence.then(item)
    })
    return sequence
}

// 执行队列
// queue([a, b, c])
//     .then(data => {
//         console.log(data)// abc
//     })

function queue1 (things) {
    var promise = Promise.resolve();
    things.forEach(thing => {
        promise = promise.then(() => {
            return new Promise(resolve => {
                resolve(thing)
                // return todo(thing,(data) => {
                //     resolve(data)
                // })
            })
        })
    })
    return promise
}
function todo (thing,cb) {
    console.log(thing)
    cb(thing+'你')
}
queue1(['dk','djjd','ok']).then(data => {
    console.log(data)
})


function promise_forEach_then() {
    let ids = [1,2,3];
    let promise = Promise.resolve();
    ids.forEach((id) => {
        promise
            .then(() => {
                return {id}
            })
            .then(consoleLogId)
    });
}

function consoleLogId(id) {
    console.log(id)
    console.log('promise_forEach_then---' + id);
}
promise_forEach_then();