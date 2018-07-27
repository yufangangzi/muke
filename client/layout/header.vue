<template>
  <div class="main">
    Jtodo
  </div>
</template>
<style lang="stylus" module>
.main{
  font-size :39px;
  color #000
}
  
</style>
<script>
  export default {
    mounted () {
      this.$nextTick(() => {
        console.log(this.$style)
      })
    }
  }
</script>