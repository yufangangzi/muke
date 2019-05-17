<template>
  <div>
    <el-row class="tac">
      <el-col :span="4">
        <h5>文档笔记</h5>
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @select="handleSelect"
          >
          <el-menu-item v-for="(item, index) of pageNav" :index="item.path+item.filename">
            <i class="el-icon-edit"></i>
            <span slot="title">{{item.filename}}</span>
          </el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="20">
        <div style='white-space:pre; padding:20px' v-html="page"></div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import {getView, getFiles} from '../../api/zhishiku.js'
export default {
  data () {
    return {
      page: '',
      pageNav: []
    }
  },
  mounted () {
    // this.getPage()
    this.initFiles()
  },
  methods: {
    getPage (path) {
      const data = {viewname: path || 'history'}
      getView(data).then(res => {
        if (res.success) {
          // const reg = /\r\n/g
          const pg = res.data.replace(/\n/g, '<br>')
          this.page = pg
        }
      })
    },
    initFiles () {
      getFiles().then(res => {
        if (res.success) {
          this.pageNav = res.data
        }
        console.log(res)
      }).then(() => {
        const first = this.pageNav[0]
        this.getPage(first.path + first.filename)
      })
    },
    handleSelect (key) {
      this.getPage(key)
    }
  }
}
</script>
