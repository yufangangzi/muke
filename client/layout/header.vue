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
          <el-menu-item index="1">处理中心</el-menu-item>
          <el-submenu index="2">
            <template slot="title">我的工作台</template>
            <el-menu-item index="2-1">选项1</el-menu-item>
            <el-menu-item index="2-2">选项2</el-menu-item>
            <el-menu-item index="2-3">选项3</el-menu-item>
            <el-submenu index="2-4">
              <template slot="title">选项4</template>
              <el-menu-item index="2-4-1">选项1</el-menu-item>
              <el-menu-item index="2-4-2">选项2</el-menu-item>
              <el-menu-item index="2-4-3">选项3</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-menu-item index="3">消息中心</el-menu-item>
          <el-menu-item index="family">个人信息</el-menu-item>
          <el-menu-item index="sing">唱歌</el-menu-item>
          <el-menu-item index="video">视频</el-menu-item>
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
