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
          <el-submenu v-for="(key, index) of pageKey" :key="index" :index="key">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>{{key}}</span>
            </template>
            <el-menu-item-group>
              <el-menu-item v-for="(item, index) of pageNav[key]" :index="item.path">{{item.filename}}</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <!-- <el-menu-item v-for="(item, index) of pageNav" :index="item.path+item.filename">
            <i class="el-icon-edit"></i>
            <span slot="title">{{item.filename}}</span>
          </el-menu-item> -->
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
      pageNav: {},
      pageKey: []
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
        console.log(res)
        if (res.success) {
          const pg = res.data.replace(/\n/g, '<br>')
          this.page = pg
        } else {
          const pg = `<img src="${res}" alt="">`
          this.page = pg
        }
      })
    },
    initFiles () {
      getFiles().then(res => {
        if (res.success) {
          this.pageNav = this.handdle(res.data)
          this.pageKey = Object.keys(this.pageNav)
        }
        const firstKey = this.pageKey[0]
        return this.pageNav[firstKey][0].path
      }).then((path) => {
        const first = path
        this.getPage(first)
      })
    },
    handleSelect (key) {
      this.getPage(key)
    },
    handdle (file) {
      let newFile = file.reduce((prev, cur) => {
        const path = cur.path
        const filename = cur.filename
        const newPath = path + filename
        const files = path.split('/')
        const filesname = files[files.length - 2]
        const newCur = {path: newPath, filename: filename}
        prev[filesname] ? prev[filesname].push(newCur) : prev[filesname] = [newCur]
        return prev
      }, {})
      return newFile
    }
  }
}
</script>
