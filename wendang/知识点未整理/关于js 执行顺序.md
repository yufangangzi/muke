关于js的执行顺序 就是 同步>异步>回调 下面举例子
let a = new Promise(
    function(resolve, reject) {
        console.log(1)
        setTimeout(() => console.log(2), 0)
        console.log(3)
        console.log(4)
        resolve(true)
    }
)




let b = new Promise(
    function(resolve) {
        console.log(5)
        setTimeout(() => console.log(6), 0)
        resolve(true)
    }
)

b.then(v => {
    console.log(9)
})
a.then(v => {
    console.log(8)
})
console.log(7)

最终的结果是 1,3,4,5,7,9,8,2,6
有个地方注意就是 promise 是同步的 后面的then catch 是异步的
异步的顺序和回调的顺序是按照谁先注册排队 谁先执行