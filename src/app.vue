<template>
  <div id="test">
    <div id="cover"></div>
    <Footer></Footer>
  </div>
</template>
<script>
  import Footer from './todos/footer.jsx'
  export default {
    data () {
      return {
        text:'abcuuu'
      }
    },
    components:{
      Footer
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
  background :url('./assets/images/timg1.jpg') no-repeat
  #cover
    position absolute
    left:0
    top:0
    right:0
    bottom:0
    z-index :1
    opacity: 0.9
    background-color :#999
</style>
