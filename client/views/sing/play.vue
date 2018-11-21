<template>
  <div class="ifrem">
    <!-- <iframe width='700px' height="700px" :src="ifrUrl"></iframe> -->
    <video :src="videoUrl" preload="preload" controls="controls"></video>
  </div>
</template>
<style>

</style>

<script>
import {singInfo} from '../../api/sing.js'
export default {
  name: 'play',
  data () {
    return {
      videoUrl: 'http://t7.tianlaikge.com/upload_files/audio/20150215/3fbcb7c6-a149-494d-aefc-191eea244fa1.mp4',
      ifrUrl: ''
    }
  },
  created () {
    this.init()
  },
  computed: {
    ugcId () {
      return this.$route.query.ugcId
    }
  },
  methods: {
    init () {
      const obj = {
        mvid: this.ugcId
      }
      singInfo(obj).then(res => {
        console.log(res)
        if (res.success) {
          this.ifrUrl = res.data.url
          // this.list = res.data.list
        }
      })
    }
  }
}
</script>
