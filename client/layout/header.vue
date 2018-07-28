<template>
  <div class="main">
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
    inject: ['yeye']
  }
</script>
