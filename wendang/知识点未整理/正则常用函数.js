// match 使用正则表达式模式对字符串执行查找，并将包含查找的结果作为数组返回。
//   stringObj.match(rgExp)
var s = "The rain in Spain falls mainly in the plain in";
var re = /(?:a)in/ig;
var r = s.match(re);
console.log(r)
// 用正则表达式模式在字符串中查找，并返回该查找结果的第一个值（数组），如果匹配失败，返回null。
// rgExp.exec(str)
var r1 = re.exec(s);
var arr;

// while ((arr =re.exec(s) !=null)){
//     console.dir(arr)
// }
// console.log(r1)

//test 方法
//返回一个 Boolean 值，它指出在被查找的字符串中是否匹配给出的正则表达式。
//rgexp.test(str)
var tes =re.test(s)
console.log(tes)

/*
search 方法
返回与正则表达式查找内容匹配的第一个子字符串的位置（偏移位）。
stringObj.search(rgExp) */
var index = s.search(re);
console.log(index)

/*
replace 方法
返回根据正则表达式进行文字替换后的字符串的复制。
stringObj.replace(rgExp, replaceText) */
console.log('-----------------------------------------')

var times = '2018-12-12';
var timereg = /-/g
var newTime = times.replace(timereg,'/');
console.log(newTime+'00000000000')
var ss =s.replace(re,function(regstr,$1,$2,$3,newstring){
    console.log(regstr) //返回匹配的值
    console.log($1)   //如果有匹配的话返回匹配的 如果没有返回匹配值的索引
    console.log($2)
    console.log($3)
    console.log(newstring)
    return '我是替换的'
})
console.log(ss)
console.log(s)

/*
* split 方法
将一个字符串分割为子字符串，然后将结果作为字符串数组返回。
stringObj.split([separator[, limit]]) */

var sss = s.split(re)
console.log(sss)
