js 的数据类型 原来是6种，分别是number,string,null,undefind,boolean,object 现在在es6中添加了一种symbol类型

创建symbol 只能用Symbol()来创建  不能用new   创建的时候传个参数用来区分

1  symbol作为对象的属性名称 在对象中做为属性名需要加中括号否则就是一个字符串，当他做对象的key值时 一般是私有不可遍历的属性

var ss=Symbol()
var obj={
	ss:"name1",
	[ss]:"name2"
}

2  Symbol Symbol.for() 他两个参数都是字符串  后者返回的值是相同的
var s = Symbol('34');            ///每次调用都返回新的值，
var ss = Symbol.for('34');        //每次调用先检查全局是否有，没有在返回新的值
var sss = Symbol.for('34');
s ===ss //false;
ss ===sss //true;

3  Symbol.keyFor() 用来返回 Symbol.for()的参数值 没有的话返回undefind
var v  = Symbol('name');
var vv = Symbol('the name');
Symbol.keyFor(vv)  ->'the name';
 Symbol.keyFor(v)  ->undefined;        //访问一个没有定义的symbol会报错

4  获取Symbol属性的方法
只能通过 Object.hasOwnPropertySymbols()