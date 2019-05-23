Promise 包含几个主要的方法
包括 then() reject() resolve() catch() all() race()

1. then方法就是将原来的回调函数放在这里执行 可以继续在回调中写promise

const cook=()=>{
    console.log('开始做饭')
    return new Promise(resolve=>{
        console.log('鸡蛋炒饭做好了')
        resolve('鸡蛋炒饭')
    })
}
const eat=(data)=>{
    console.log('开始吃'+data)
    return new Promise(resolve=>{
        console.log('饭吃完了')
        resolve('吃饭碗')
    })
}
const xi=(data)=>{
    console.log('开始洗'+data)
    return new Promise(resolve=>{
        console.log('吃饭碗洗完了')
        resolve('早点睡觉吧')
    })
}
cook()
    .then(eat)
    .then(xi)
    .then(function(data){
        console.log(data)
    })

2. reject()和 resolve() resolve是将promise的状态值置为 Resolved
reject是将promise的状态值置为 Rejected

3. catch()和then的第二个函数一样用来指定reject的回调
   他的另一个作用就是在resolve中执行有报错的时候会 走catch 不会将js卡死

4. all()提供了并行执行异步操作的能力，并且在所有异步操作都有返回值时才会执行下面的
  all和then中的参数是以数组的形式传递的
  const cutup=()=>{
      console.log('开始切菜')
      return new Promise(resolve=>{
          setTimeout(()=>{
              console.log('菜切好了')
              resolve('泡菜')
          },2000)
      })
  }
  const boi=()=>{
      console.log('开始烧水')
      return new Promise(resolve=>{
          setTimeout(()=>{
              console.log('水烧开了')
              resolve('开水')
          },3000)
      })
  }
  Promise.all([
      cutup(),
      boi()
  ]).then(([cut,bo])=>{
      console.log(bo+cut)
  })
5. race() 和all用法一样 区别是只要有一个函数有返回值 就执行then里的函数
  常用的是做超时的处理