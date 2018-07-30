<template>
  <div>
    <span>todo---{{id}}</span>
    <router-link to="/app/text">text</router-link>
    <router-view></router-view>
  </div>
</template>
<script>
  export default {
    beforeRouteEnter (to, from, next) {
      console.log('todo enter')
      // 在 next 前实例还没有被创建 可以在next 添加回掉
      next(vm => {
        console.log('this is vm.id', vm.name)
      })
    },
    beforeRouteUpdate (to, from, next) {
      console.log('todo updata')
      next()
    },
    beforeRouteLeave (to, from, next) {
      console.log('todo leave')
      if (global.confirm('are yoou sure')) {
        next()
      }
    },
    props: ['id'],
    data () {
      return {
        name: '4444444'
      }
    }
  }
</script>
