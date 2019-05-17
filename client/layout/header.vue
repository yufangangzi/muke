<template>
  <div class="head-top">
    <el-row>
      <el-col :span="24">
        <el-menu
          :default-active="activeIndex2"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
          active-text-color="#ffd04b">
          <el-menu-item index="1">班级信息</el-menu-item>
          <el-menu-item index="work">工作台</el-menu-item>
          <el-menu-item index="family">个人信息</el-menu-item>
          <el-menu-item index="sing">唱歌</el-menu-item>
          <el-menu-item index="video">视频</el-menu-item>
          <el-menu-item index="viewpage">随手笔记</el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>
<style lang="stylus">
@import './head.styl'
</style>
<script>
  import {myname} from './header.js'
  export default {
    mounted () {
      this.$nextTick(() => {
        console.log(this.$style, this.yeye)
        myname()
      })
    },
    inject: ['yeye'],
    data () {
      return {
        topInfo: [
          {content: '学习'},
          {content: '生活'}
        ],
        activeIndex2: '1'
      }
    },
    methods: {
      handleSelect (key, keyPath) {
        console.log(key, keyPath)
        this.$router.push({
          name: key
        })
      }
    }
  }
</script>
