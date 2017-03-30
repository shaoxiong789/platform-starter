<template>

<el-col>
    <el-collapse v-model="activeNames">
        <el-collapse-item v-for="(menu,index) in menus" :title="menu.name" :name="index">
            <ul class="el-menu-itms">
                <router-link v-for="menuitem in menu.child" :to="{ path: '/'+menuitem.path }">
                    <li class="el-menu-item"><i :class="menuitem.icon"></i>{{menuitem.name}}</li>
                </router-link>
            </ul>
        </el-collapse-item>
    </el-collapse>

</el-col>

</template>

<script>
import meuns from '../../menu.js'
export default {
    data() {
        return {
            activeNames: ['1'],
            menus:meuns
        };
    }
}

</script>
<style>
  .el-menu-item{
      list-style-type: none;
  }
  .el-collapse-item__content{
    padding: 0;
  }
  .el-collapse-item__wrap{
    background-color: #333744;
    border-bottom:0px;
  }
  .el-menu-item, .el-submenu__title,.el-collapse-item__content{
    color: #fff;
  }
  .el-collapse-item__header{
        background: #42485B;
        border-bottom:0px;
  }
  .el-collapse{
    border:none;
  }
  .el-collapse-item__header{
    color: #fff;
  }
  .el-menu-itms{
    margin: 0;
    padding: 0px;
  }
  .el-menu-item:hover{
    background: #4A5064;
  }
  .el-icon-setting{
    margin-right: 20px;
  }
</style>