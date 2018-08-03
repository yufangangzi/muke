<template>
  <div class="main" @click="bac">
    Jtodo I am back
  </div>
</template>
<style lang="stylus" module>
.main{
  font-size :39px;
  color #000
}

</style>
<script>
  import {myname} from './header.js'
  export default {
    mounted () {
      this.$nextTick(() => {
        console.log(this.$style, this.yeye)
        myname()
      })
    },
    inject: ['yeye'],
    methods:{
      bac() {
        console.log('7887')
      }
    }
  }
</script>
