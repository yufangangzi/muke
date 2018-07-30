<template>
  <div id="test">
    <div id="cover"></div>
    <Header></Header>
    <p>{{fullname}}----{{counter}}</p>
    <p>{{textc}}</p>
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
  import {mapGetters, mapState, mapActions} from 'vuex'
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
    },
    methods: {
      ...mapActions(['undataCountSync'])
    },
    mounted () {
      console.log(this.$store)
      // this.$store.dispatch('undataCountSync', {num: 5, time: 2000})
      this.undataCountSync({num: 5, time: 2000})
    },
    computed: {
      ...mapGetters([
        'fullname'
      ]),
      // ...mapState([
      //   'count'
      // ])     // 第一种写法
      ...mapState({
        counter: (state) => { return state.count },
        textc: state => state.c.text
      }) // 第二种写法
      // count () {
      //   return this.$store.state.count
      // },
      // fullname () {
      //   return this.$store.getters.fullname
      // }
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
