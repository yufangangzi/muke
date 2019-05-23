
Object.defineProperty()
Object.defineProperty(obj, prop, descriptor)

object 是目标对象 
prop 需要定义或者修改的属性名字
descriptor 目标属性所拥有的特性  
    configurable:true | false,  是否可以修改或者删除目标属性
    enumerable:true | false,    是否可以被枚举
    value:任意类型的值,         属性对应的值
    writable:true | false       属性的值是否可以被重写

存取器的描述
var obj = {};
Object.defineProperty(obj,"newKey",{
    get:function (){} | undefined,
    set:function (value){} | undefined
    configurable: true | false
    enumerable: true | false
});