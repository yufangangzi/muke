<template>
  <div>
    <div>登录</div>
    <el-form :model="ruleForm" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="用户名" >
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="密码" >
        <el-input v-model="ruleForm.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm">立即登录</el-button>
        <el-button @click="handleClose">取消</el-button>
      </el-form-item>
    </el-form> 
    
  </div>
</template>
<script>
export default {
  data () {
    return {
      ruleForm: {
        name: '',
        password: ''
      }
    }
  },
  methods: {
    handleClose (e) {
      e.preventDefault()
      this.$emit('close')
    },
    submitForm (e) {
      e.preventDefault()
      this.$emit('submit', this.ruleForm)
    }
  }
}
</script>
