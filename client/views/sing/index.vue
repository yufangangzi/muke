<style scoped>
.singlist{
  font-size: 18px
}
.sings{
  position: relative;
  display: inline-block;
  margin: 0 10px;
  width: 20%;
  cursor: pointer;
}
.sings img{
  width:100%;
}
</style>

<template>
  <div>
    <ul class="singlist">
      <li  class="sings" v-for="(item, index) of list" :key="index" @click="play(item.id)">
        <img :src="item.image" alt="">
      </li>
    </ul>
  </div>
</template>
<script>
import {singList} from '../../api/sing.js'
export default {
  name: 'sing',
  data () {
    return {
      list: []
    }
  },
  created () {
    this.getSingList()
  },
  methods: {
    getSingList () {
      const obj = {
        status: 1,
        type: 0,
        start: 0
      }
      singList(obj).then(res => {
        if (res.success) {
          this.list = res.data.list
        }
        console.log(res)
      })
    },
    play (id) {
      this.$router.push({
        name: 'play',
        query: {
          ugcId: id
        }
      })
    }
  }
}
</script>
