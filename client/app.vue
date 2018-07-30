<template>
  <div id="test">
    <div id="cover"></div>
    <Header></Header>
    <router-link to="/app">app</router-link>
    <router-link to="/login">login</router-link>
    <transition name="fade">
      <router-view></router-view>
    </transition>
    <Footer></Footer>
    <router-view name="a"></router-view>
  </div>
</template>
<script>
  import Footer from './layout/footer.jsx'
  import Header from './layout/header.vue'
  export default {
    provide () {
      return {
        yeye: this
      }
    },
    data () {
      return {
        text: 'abcuuu'
      }
    },
    components: {
      Footer,
      Header
    }
  }
</script>
<style lang="stylus" scoped>
#test
  position absolute
  left:0
  top:0
  right:0
  bottom:0
  // background :url('./assets/images/timg1.jpg') no-repeat
  // #cover
  //   position absolute
  //   left:0
  //   top:0
  //   right:0
  //   bottom:0
  //   z-index :1
  //   opacity: 0.4
  //   background-color :#999
</style>
