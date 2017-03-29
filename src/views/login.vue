<template>
  <div>
    <div class="login-wrap">
      <h1>login</h1>
      <el-input v-model="username" placeholder="用户名"></el-input>  
      <el-input v-model="userpwd" placeholder="密码"></el-input>
      <el-button type="primary">
        <router-link :to="{ path: '/' }">登录</router-link>
      </el-button>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      username: '',
      userpwd:''
    }
  },
  methods:{
    login:function(){

      // alert("login")     
    }
  }
}
</script>
<style>
.login-wrap{
  width:350px;
  margin:30px auto;
  padding:20px 30px;
  background:#f1f1f1;
}
.el-input{
  margin:10px 0;
}
</style>