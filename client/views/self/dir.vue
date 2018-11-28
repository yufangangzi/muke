<template>
  <div class="dir">{{dir}}</div>
</template>
<script>
export default {
  name: 'dir',
  props: {
    dir: {
      type: String
    }
  }
}
</script>
<style lang='less' scoped>
.dir{
  text-indent: 35px;
  padding: 10px 25px;
  line-height: 25px;
}
</style>

