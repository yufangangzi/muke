const prototype = {
  'js-4': [
    '原型链的理解',
    '<em>看一个实例</em>',
    'var animal = function() {};',
    'var dog = function() {};',
    'animal.prototype.price = 20;',
    'animal.price = 1000;',
    'dog.prototype = animal;',
    'var cat = new animal();',
    'var tidy = new dog();',
    '// 下面两行分别输出什么？',
    'console.log(cat.price);',
    'console.log(tidy.price);',
    '<em>需要知道</em>',
    '要理解原型和原型链首先要知道几个概念：',
    '在js里，继承机制是原型继承。继承的起点是 对象的原型（Object prototype）。',
    '一切皆为对象，只要是对象，就会有 proto 属性，该属性存储了指向其构造的指针。Object prototype也是对象，其 proto 指向null。',
    '对象分为两种：函数对象和普通对象，只有函数对象拥有『原型』对象（prototype）。prototype的本质是普通对象。Function prototype比较特殊，是没有prototype的函数对象。new操作得到的对象是普通对象。',
    '当调取一个对象的属性时，会先在本身查找，若无，就根据 proto 找到构造原型，若无，继续往上找。最后会到达顶层Object prototype，它的 proto 指向null，均无结果则返回undefined，结束。',
    '由 proto 串起的路径就是『原型链』。',
    '<em>看图</em>',
    '将开篇的一段代码对象关系做了个关系图如下： 红色表示函数对象，蓝色表示普通对象',
    '<img style="width:100%" src="/assets/images/proto.png" alt="">',
    '<em>说话</em>',
    '<b>cat调用price</b>',
    '① 查看本身，没有price，根据 proto 找到 animal prototype对象',
    '② 在animal prototype对象中找到了price，所以 cat.price 结果为20。',
    '③ 如果无 animal.prototype=20，则会根据animal prototype对象的 proto 找到Object prototype，Object prototype中的 proto 指向null，若仍没有找到price，结果则为undefined。',
    '<b>tidy调用price</b>',
    '① 查看本身，没有price，根据 proto 找到dog prototype。',
    '② dog prototype = animal，这里可以这样理解： prototype本质也是一个对象，因此可以重新赋一个对象，无论是函数对象还是普通对象。事实上，每个 prototype 会有一个预定义的constructor属性用来引用它的函数对象。',
    '③ 在animal中找到了price， 所以 tidy.price 结果为1000。',
    '④ 如果无 animal.price = 1000，则会根据animal的 proto 找到下一个对象，最终都没有找到 price，结果就为undefined。',
    '<em>深入</em>',
    '<b>创建一个对象的方式</b>',
    '{}、new Object()',
    '构造函数',
    'Object.create()此方法将新对象的proto更改并指向create的入参对象。',
    '<b>nstance of VS constructor</b>',
    'instance of 原理：检查左边对象与右边对象是否在同一条原型链上。',
    'constructor原理：取对象的proto属性指向的prototype对象上的constructor字段',
    'cat instanceof animal === true </br>cat.__proto__ === animal.prototype </br>animal.prototype instanceof Object === true</br>animal.prototype.__proto__ === Object.prototype</br>cat instanceof Object === true// but，</br>cat.constructor === animal // true</br>cat.constructor === Object // false',
    '<em>继承</em>',
    '<b>类的声明</b>',
    'function, class',
    '<b>生成实例： new</b>',
    '<b>继承的几种方法</b>',
    '1-借助构造函数，父类的作用域指向子类',
    'Parent.call(this) // this是Child类的上下文',
    '缺点：不能继承原型链属性',
    '借助原型链',
    'Child.prototype = new Parent()',
    '缺点：子类所有实例共享原型对象；子类实例的constructor为Parent',
    '组合方式',
    'Parent.call(this) // this是Child类的上下文',
    'Child.prototype = Object.create(Parent.prototype)',
    'Child.prototype.constructor = Child',
    'https://www.jianshu.com/p/17b2d4dd6867',
    'https://www.cnblogs.com/sarahwang/p/6870072.html'
  ]
}
export default prototype
