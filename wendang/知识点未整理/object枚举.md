js属性分为原型属性和实例属性 ，原型属性就是添加在prototype上的属性，实例属性一方面来在构造函数中一方面是构造函数实例后添加的属性。

在js中对一个对象的遍历不是那么简单：一是对象可以通过原型链继承上层原型上的一些方法和属性 ，二是js中的属性不仅有值他还有其他的特性，叫做不可枚举[Enumerable]值为true 时是可枚举的反之不是

下面是几种遍历对象的方法总结
1 for ... in
2 Object.keys()
3 Object.hasOwnPropertyNames()
4 for ... of

for...in循环遍历时可以遍历对象中所有可枚举属性 包括对象自有属性和继承属性
在不同浏览器中遍历时的对象顺序不一定是对象构建时的顺序

如果要跳过继承属性只遍历自身属性 可以用 hasOwnProperty 来过滤掉
for (prop in obj) {
    if (!obj.hasOwnProperty(prop)) continue; // 跳过继承属性
}


Object.keys() 返回一个对象自身可枚举属性的属性名组成的数组，他不会返回继承属性中的属性名  传入的值如果不是对象会报错

Object.hasOwnPropertyNames() 返回一个对象的属性的属性名组成的数组 包括不可枚举的属性  但是不会遍历继承属性上属性名

for ... of 是遍历可以迭代的对象，主要是用来获取对象的属性值的  即使值为空