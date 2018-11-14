<template>
  <el-container>
    <el-header>
      <Header></Header>
    </el-header>
    <el-main>
      <transition name="fade">
        <router-view></router-view>
      </transition>
    </el-main>
    <el-footer>
      <Footer></Footer>
    </el-footer>
  </el-container>
  <!-- <div id="test">
    <div id="cover"></div>
    <Header></Header>
    <p @click="notify">{{fullname}}----{{counter}}</p>
    <p>{{text}}</p>
    <el-button @click="visible = true">Button</el-button>
    <router-link to="/app">app</router-link>
    <router-link to="/login">login</router-link>
    <transition name="fade">
      <router-view></router-view>
    </transition>
    <Footer></Footer>
  </div> -->
</template>
<script>
  import Footer from './layout/footer.jsx'
  import Header from './layout/header.vue'
  import {mapGetters, mapState, mapActions} from 'vuex'
  export default {
    metaInfo: {
      title: '我是主页啊'
    },
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
      ...mapActions(['undataCountSync']),
      notify () {
        this.$notify({
          content: 'kdkkdkdk'
        })
      }
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
<style lang="stylus">
@import './app.styl'
</style>
