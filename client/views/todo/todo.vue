<template>
  <div>
    <!-- <span>todo---{{id}}</span>
    <router-link to="/app/text">text</router-link> -->
    <el-table :data="userList" stripe style="width:100%">
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="age"
        label="年龄"
        width="180">
      </el-table-column>
      <el-table-column
        label="操作"
        width="100">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small">删除</el-button>
          <el-button @click="resetClick(scope.row)" type="text" size="small">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-button type="primary" @click="addUsers">添加</el-button>
    <el-dialog title="添加人员" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="姓名" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="年龄" :label-width="formLabelWidth">
          <el-input v-model="form.age" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogsure">确 定</el-button>
      </div>
    </el-dialog>
    <router-view></router-view>
  </div>
</template>
<script>
  import {getUser, addUser, deleteUser, updateUser} from '../../api/user.js'

  export default {
    beforeRouteEnter (to, from, next) {
      console.log('todo enter')
      // 在 next 前实例还没有被创建 可以在next 添加回掉
      next(vm => {
        console.log('this is vm.id', vm.name)
      })
    },
    beforeRouteUpdate (to, from, next) {
      console.log('todo updata')
      next()
    },
    beforeRouteLeave (to, from, next) {
      console.log('todo leave')
      next()
      // if (global.confirm('are yoou sure')) {
      //   next()
      // }
    },
    props: ['id'],
    data () {
      return {
        name: '4444444',
        userList: [],
        dialogFormVisible: false,
        formLabelWidth: '120px',
        form: {
          name: '',
          age: 0,
          id: ''
        },
        isAdd: true
      }
    },
    methods: {
      addUsers () {
        this.dialogFormVisible = true
        this.isAdd = true
      },
      getUsers () {
        getUser().then(data => {
          if (data.success) {
            this.userList = data.data
          }
          console.log(data)
        })
      },
      dialogsure () {
        this.dialogFormVisible = false
        if (this.isAdd) {
          addUser(this.form).then(res => {
            if (res.success) {
              this.getUsers()
            }
          })
        } else {
          updateUser(this.form).then(res => {
            if (res.success) {
              this.getUsers()
            }
          })
          console.log('编辑表格')
        }
      },
      handleClick (data) {
        deleteUser(data).then(res => {
          console.log(res)
          if (res.success) {
            this.getUsers()
          }
        })
      },
      resetClick (data) {
        this.isAdd = false
        this.form = data
        this.dialogFormVisible = true
      }
    },
    mounted () {
      console.log('7777')
      // this.getUsers()
    }
  }
</script>
