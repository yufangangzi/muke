<template>
<div class="work-main">
  <el-row class="tac">
  <el-col :span="6">
    <h5>工作列表</h5>
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-submenu v-for="(item, index) of works" :key="index" :index="item.pathname">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span slot="title">{{item.title}}</span>
        </template>
        <el-menu-item-group v-if="item.children">
          <el-menu-item v-for="(itemchild, index) of item.children" :index="itemchild.name" >{{itemchild.title}}</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </el-col>
  <el-col :span="18">
    <div class="contents">
      <p v-for="(item, index) of selecontents" v-html="item"></p>
    </div>
    <div>
      <keep-alive>
          <router-view></router-view>
      </keep-alive>
    </div>
  </el-col>
</el-row>
</div>
</template>
<script>
  import {works} from '../../config/routes.js'
  import contents from '../../json/content.js'
export default {
    data () {
      return {
        works: works,
        contents: contents,
        defaultId: 'default',
        selecontents: contents['default']
      }
    },
    methods: {
      handleSelect (key) {
        if (contents[key]) {
          this.selecontents = contents[key]
        } else {
          this.selecontents = []
          this.$router.push({
            name: key
          })
        }
      }
    }
  }
</script>
<style lang='less'>
    @import './index.less';
</style>
