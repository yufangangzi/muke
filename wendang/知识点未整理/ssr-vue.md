1.服务端渲染后  浏览器还需要渲染吗

resolve:{
  alias:{
    'vue':path.join(__dirname,'../node_modules/vue/dist/vue.esm.js')  这样指定的时候可以指定 template
  }
}

new HTMLPlugin({
  template:path.join(__dirname,'默认的模板地址')
})

vue 的实例

const app = new Vue({
  el:'',
  template:''
})

vue 实例的创建和作用   实例的属性  实例的方法

挂载方式两种  一种是上面在 new 的时候 el 参数添加要挂载的 id   第二种是 使用 new 的实例.$mount('#root)

实例的属性 
app.$data
app.$props
app.$el

app.$options  这个参数是把所有属性都包在一起的属性  
app.$options.render =(h) => {
  return h('div',{},'new vue page')
}
在 vue 的数值变化的时候会调用这个 render

app.$root ===app true 
app.$children 

app.$slots
app.$scopedSlots
app.$refs
app.$isServer


实例方法
app.$watch  和 options的 watch 是一样的   
使用const unwatch = app.$watch('test,()=>{

}) 的时候需要自己去销毁掉 unwatch()

app.$on
app.$emit  这两个使用的时候必须在一个实例中   全局的 bus 
app.$once

app.$forceUpdate() 强制渲染  不建议使用  比如在 data  中有个参数 obj:{}  在 后面添加新的属性  页面不会变化 调用这个函数 会强制渲染
app.$set(app.obj,'a',1)  这种方法可以让页面变化
app.$nextTick(callback) 在 vue 下次更新的时候 会调用 callback


vue 的生命周期  也就是new 的vue 对象的生命周期

befortCreate () {

}
created () {
  给组件中的值 赋值  最早在这里操作 
}
上面两个生命周期是不能操作 dom 的 dom 还没有生成  服务端只能在上面两个生命周期操作  服务端是没有  window 的

befortMount () {
  
}
在这两个中间有 render 函数  在.vue 文件中没有 template  那个文件的是通过 vue-loader处理的 处理完成 才经过 render  这样较少编译的时间

renderError () {
  只有本组件中有错误的时候 才会报错
}
errorCaptured (h,err) {
  在跟组件中可以补货到子组件的错误 
}
mounted () {
  
}
在 mounted 中调用关于 dom 的
befortUpdate () {
  
}
updated () {

}
activated () {

}
deactivated () {
  和keeplive 有关系 需要查
}
befortDestroy() {

}
destroyed() {
  销毁实例
}

