<template>
  <div>我是家庭</div>
</template>
<script>
  export default {
    beforeRouteEnter (to, from, next) {
      console.log('family enter')
      // 在 next 前实例还没有被创建 可以在next 添加回掉
      next(vm => {
        console.log('this is vm.id', vm.name)
      })
    },
    beforeRouteUpdate (to, from, next) {
      console.log('family updata')
      next()
    },
    beforeRouteLeave (to, from, next) {
      console.log('family leave')
      // if (global.confirm('are yoou sure')) {
      //   next()
      // }
    }
  }
</script>