<template>
  <div>
    <div class="login-wrap">
      <h1>login</h1>
      <el-input v-model="username" placeholder="用户名"></el-input>
      <el-input v-model="userpwd" placeholder="密码"></el-input>
      <el-button type="primary" @click="login()">登录</el-button>
      <span class="errorMsg">
          {{errorMsg}}
      </span>
    </div>
  </div>
</template>


<script>
  export default {
    data() {
      return {
        username: '',
        userpwd: '',
        errorMsg: ''
      }
    },
    methods: {
      login: function() {
        if (this.loginVerify()) {
          sessionStorage.setItem('accessToken', 'username')
          console.log(this.$router)
          this.$router.push({
            path: '/manage/daysign/',
            params: {
              username: "",
              userpwd: ""
            }
          })
        } else {
          this.errorMsg = "输入错误,不能为空";
        }
      },
      loginVerify: function() {
        if (this.username != "" && this.userpwd != "") {
          return true;
        }
        return false;
      }
    }
  }
</script>

<style>
  .login-wrap {
    width: 350px;
    margin: 30px auto;
    padding: 20px 30px;
    background: #f1f1f1;
  }
  
  .el-input {
    margin: 10px 0;
  }
  
.errorMsg {
    color: orange;
    margin-left: 10%;
    font-size: 12px;
    padding: 20px;
  }
</style>

