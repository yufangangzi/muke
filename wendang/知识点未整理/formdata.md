<body>
  <form>
    <input type="text" value="" v-model="name" placeholder="请输入用户名">
    <input type="text" value="" v-model="age" placeholder="请输入年龄">
    <input type="file" @change="getFile($event)">
    <button @click="submitForm($event)">提交</button>
  </form>

  <script>
    window.onload = function () {
      Vue.prototype.$http = axios;
      new Vue({
        el: 'form',
        data: {
          name: '',
          age: '',
          file: ''
        },
        methods: {
          getFile(event) {
            this.file = event.target.files[0];
            console.log(this.file);
          },
          submitForm(event) {
            event.preventDefault();
            let formData = new FormData();
            formData.append('name', this.name);
            formData.append('age', this.age);
            formData.append('file', this.file);

            let config = {
              headers: {
                'Content-Type': 'multipart/form-data'
              }
            }

            this.$http.post('/upload', formData, config).then(function (res) {
              if (res.status === 2000) {
                /*这里做处理*/
              }
            })
          }
        }
      })
    }
  </script>
</body>



<template>
  <div class="admin">
    <div class="admin-content">
      <div class="edit">
        <div class="avatar">
          <div class="img">
            <img :src="avatar" @click="setAvatar">
            <span>更改</span>
          </div>
          <input type="file" name="avatar" accept="image/gif,image/jpeg,image/jpg,image/png" style="display:none" @change="changeImage($event)" ref="avatarInput">
        </div>
        <button type="button" @click="edit">确认修改</button>
      </div>
    </div>
  </div>
</template>
<script>
import AdminAside from '../../components/admin/AdminAside.vue'
export default {
  data() {
    return {
      avatar: this.$store.state.administrator.avatar,
    }
  },
  methods: {
    edit() {
      // 修改了头像
        if (this.$refs.avatarInput.files.length !== 0) {
          var image = new FormData()
          image.append('avatar', this.$refs.avatarInput.files[0])
          this.axios.post('/avatar', image, {
            headers: {
              "Content-Type": "multipart/form-data"
            }
          })
        }
      })
    },
    setAvatar() {
      this.$refs.avatarInput.click()
    },
    changeImage(e) {
      var file = e.target.files[0]
      var reader = new FileReader()
      var that = this
      reader.readAsDataURL(file)
      reader.onload = function(e) {
        that.avatar = this.result
      }
    }
  }
}
</script>
解释一下上面代码的意思，当我们点击图片会触发setAvatar函数，该函数会触发input的click事件，于是就会弹出文件选择框，当我们选择了一张图片后，触发chageImage函数，这个函数的功能就是预览你上传的图片，单后当我们点击修改按钮后，就会把资源传到后端

后端处理
后端接收到你上传的资源，肯定要把资源保存到服务器，我就以Nodejs来说明，我使用formidable解析上传的数据

exports.avatar = function(req, res, next) {
  let form = new formidable.IncomingForm()
  form.parse(req, function(err, fields, files) {
    if (err) {
      return res.json({
        "code": 500,
        "message": "内部服务器错误"
      })
    }

    // 获取后缀名
    let extname = path.extname(files.avatar.name)
    let oldpath = files.avatar.path;
    let newpath = './public/avatar' + extname;
    let avatarName = 'avatar' + extname;
    // 更改名字和路径
    fs.rename(oldpath, newpath, function(err) {
      if (err) {
        return res.json({
          "code": 401,
          "message": "图片上传失败"
        })
      }
    })
    // 更新数据库
    db.updateMany('users', { "user": username }, { "avatar": avatarName },
      function(err, result) {
        if (err) {
          return res.json({
            "code": 401,
            "message": "头像更新失败"
          })
        }
        return res.json({
          "code":200,
          "message": "头像上传成功"
        })
      })
  })
}