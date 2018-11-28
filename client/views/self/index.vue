<template>
  <div class="person">
    <h3>个人简历</h3>
    <div class="contain">
      <el-row type="flex" class="row-bg" justify="center">
        <el-col :span="8">
          <div class="person-info">姓名：陈刚</div>
        </el-col>
        <el-col :span="8">
          <div class="person-info">出生年月：1988.02.12</div>
        </el-col>
        <el-col :span="8">
          <div class="person-info">性别：男</div>
        </el-col>
      </el-row>
      <el-row type="flex" class="row-bg" justify="center">
        <el-col :span="8">
          <div class="person-info">学历：大专</div>
        </el-col>
        <el-col :span="8">
          <div class="person-info">户籍：河北张家口</div>
        </el-col>
        <el-col :span="8">
          <div class="person-info">电话：13311095376</div>
        </el-col>
      </el-row>
      <el-row type="flex" class="row-bg" justify="center">
        <el-col :span="16">
          <div class="person-info">邮箱：13311095376@189.cn</div>
        </el-col>
        <el-col :span="8">
          <div class="person-info">爱好：体育运动</div>
        </el-col>
      </el-row>
      <p class="dir-tit">工作经历：</p>
      <div>
        <p class="dir-tit indent">上海PP聚力传媒有限公司 2016.9-2018.5</p>
        <dir></dir>
      </div>
      <div>
        <p class="dir-tit indent">天籁传音科技有限公司 2015.3-2016.8</p>
      </div>
      <div>
        <p class="dir-tit indent">上海微创科技有限公司 2014.3-2015.2</p>
      </div>
      <div>
        <p class="dir-tit indent">北京鼎智思维科技有限公司 2013.5-2014.3</p>
      </div>
    </div>
  </div>
</template>
<script>
import dir from './dir.vue'
export default {
  data () {
    return {

    }
  },
  components: {
    dir
  }
}
</script>

<style lang='less' scoped>
.person{
  
  h3{
    text-align: center
  }
  .contain{
    max-width: 800px;
    margin: 0 auto;
    background-color: bisque;
    .person-info{
      text-align: left;
      padding: 5px 5px 5px 20px;
    }
    .dir-tit{
      height: 40px;
      line-height: 40px;
      font-size: 18px;
      padding-left: 20px;
      margin-top: 0;
      margin-bottom: 0;
    }
  }
}
</style>
