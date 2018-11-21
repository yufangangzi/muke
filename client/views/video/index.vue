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
        <a :href="item.playUrl">
          <img :src="item.imageUrl" ref="noreferrer" alt="">
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import {getList} from '../../api/video.js'
export default {
  data () {
    return {
      list: []
    }
  },
  created () {
    this.init()
  },
  methods: {
    init () {
      getList().then(res => {
        if (res.success) {
          this.list = res.data.data[0].theme_data
        }
        console.log(res)
      })
    }
  }
}
</script>
