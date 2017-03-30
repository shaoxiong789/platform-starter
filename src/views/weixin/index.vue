<template>
    <div>
    <h1>微信的界面</h1>
    <!-- 微信的界面-->
    <router-view></router-view> 
    <footer>
        <router-link :to="{ path: '/weixin/home' }">首页</router-link>
        <router-link :to="{ path: '/weixin/histroy' }">我的记录</router-link>
        <router-link :to="{ path: '/weixin/rankingList' }">排行榜</router-link>        
    </footer>
    </div>

</template>
<script>
    
</script>
<style>
  footer a{
    /*   display:inline-block; */
      width:33%;
      color:#555;
      text-align:center;
      background:#ccc;
  }  
  footer a:active{
      color:orange;
  }
</style>