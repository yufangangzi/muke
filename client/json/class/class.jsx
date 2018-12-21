import '../work.less'
export default {
  data () {
    return {
      author: 'hejing',
      hakz: '{',
      haky: '}'
    }
  },
  render () {
    return (
      <div class="main-box">
        <div>ECMAScript 2015 中引入的 JavaScript 类实质上是 JavaScript 现有的基于原型的继承的语法糖。类语法不会为JavaScript引入新的面向对象的继承模型。</div>
        <h3>定义类</h3>
        <div>类实际上是个“特殊的函数”，就像你能够定义的函数表达式和函数声明一样，类语法有两个组成部分：类表达式和类声明。</div>
        <h5>类声明</h5>
        <div>定义一个类的一种方法是使用一个类声明。要声明一个类，你可以使用带有class关键字的类名（这里是“Rectangle”）。</div>
        <div>
          <img src='/assets/images/class/class-1.png' alt=''></img>
        </div>
        <div>提升 函数声明和类声明之间的一个重要区别是函数声明会提升，类声明不会。你首先需要声明你的类，然后访问它，否则像下面的代码会抛出一个ReferenceError：</div>
        <h5>类表达式</h5>
        <div>一个类表达式是定义一个类的另一种方式。类表达式可以是被命名的或匿名的。赋予一个命名类表达式的名称是类的主体的本地名称。</div>
        <img src='/assets/images/class/class-2.png' alt=''></img>
        <div>注意: 类表达式也同样受到类声明中提到的提升问题的困扰。</div>
        <h3>类体和方法定义</h3>
        <div>一个类的类体是一对花括号/大括号 `{this.hakz}{this.haky}` 中的部分。这是你定义类成员的位置，如方法或构造函数。</div>
        <h5>严格模式</h5>
        <div>类声明和类表达式的主体都执行在严格模式下。比如，构造函数，静态方法，原型方法，getter和setter都在严格模式下执行。</div>
        <h5>构造函数</h5>
        <div>constructor方法是一个特殊的方法，其用于创建和初始化使用class创建的一个对象。一个类只能拥有一个名为 “constructor”的特殊方法。如果类包含多个constructor的方法，则将抛出 一个SyntaxError 。</div>
        <div>一个构造函数可以使用 super 关键字来调用一个父类的构造函数。</div>
        <h5>原型方法</h5>
        <img src='/assets/images/class/class-3.png' alt=''></img>
        <h5>静态方法</h5>
        <div>static 关键字用来定义一个类的一个静态方法。调用静态方法不需要实例化该类，但不能通过一个类实例调用静态方法。静态方法通常用于为一个应用程序创建工具函数。</div>
        <img src='/assets/images/class/class-4.png' alt=''></img>
        <h5>用原型和静态方法包装</h5>
        <div>当一个对象调用静态或原型方法时，如果该对象没有“this”值（或“this”作为布尔，字符串，数字，未定义或null) ，那么“this”值在被调用的函数内部将为 undefined。不会发生自动包装。即使我们以非严格模式编写代码，它的行为也是一样的，因为所有的函数、方法、构造函数、getters或setters都在严格模式下执行。因此如果我们没有指定this的值，this值将为undefined。</div>
        <img src='/assets/images/class/class-5.png' alt=''></img>
        <div>如果我们使用传统的基于函数的类来编写上述代码，那么基于调用该函数的“this”值将发生自动装箱。</div>
        <img src='/assets/images/class/class-6.png' alt=''></img>
        <h3>使用 extends 创建子类</h3>
        <div>extends 关键字在类声明或类表达式中用于创建一个类作为另一个类的一个子类。</div>
        <img src='/assets/images/class/class-7.png' alt=''></img>
        <div>如果子类中存在构造函数，则需要在使用“this”之前首先调用 super()。</div>
        <div>也可以扩展传统的基于函数的“类”：</div>
        <img src='/assets/images/class/class-8.png' alt=''></img>
        <div>请注意，类不能继承常规（非可构造）对象。如果要继承常规对象，可以改用Object.setPrototypeOf()：</div>
        <img src='/assets/images/class/class-9.png' alt=''></img>
        <h3>Species</h3>
        <div>
        你可能希望在派生数组类 MyArray 中返回 Array对象。这种 species 方式允许你覆盖默认的构造函数。

        例如，当使用像map()返回默认构造函数的方法时，您希望这些方法返回一个父Array对象，而不是MyArray对象。Symbol.species 符号可以让你这样做：
        </div>
        <img src='/assets/images/class/class-10.png' alt=''></img>
        <h3>使用 super 调用超类</h3>
        <div>super 关键字用于调用对象的父对象上的函数</div>
        <img src='/assets/images/class/class-11.png' alt=''></img>
      </div>
    )
  }
}
