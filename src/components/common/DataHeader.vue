<template>
<div class="header-wraper">
    <el-menu theme="dark" default-active="1" class="el-menu-demo" mode="horizontal" @select="handleSelect">

        <li class="title">
            <i class="el-icon-menu"></i>
            <span>微信后台管理</span>
        </li>
        <!-- <li class="option">
            <el-select v-model="value" placeholder="请选择">
                <el-option v-for="item in options" :label="item.label" :value="item.value">
                </el-option>
            </el-select>
        </li> -->
        <li class="user">
            <el-dropdown trigger="click">
              <span class="el-dropdown-link">
                <img class="head-portrait" src="data:image/jpeg;base64,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"/>

                丁少雄<i class="el-icon-caret-bottom el-icon--right"></i>
              </span>
                <el-dropdown-menu slot="dropdown">
                      <el-dropdown-item class="menu__item">
                        <router-link class="login" :to="{ path: 'login' }">退出</router-link>
                      </el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </li>
    </el-menu>
</div>
</template>


<script>
export default {
    data() {
        return {
            options: [{
                label: "test1",
                value: 1
            }, {
                label: "test2",
                value: 2
            }, {
                label: "test3",
                value: 3
            }, {
                label: "test4",
                value: 4
            }, {
                label: "test5",
                value: 5
            }, {
                label: "test6",
                value: 6
            }, {
                label: "test7",
                value: 7
            }, ],
            value: 1
        }
    },
    methods: {
        handleSelect(key, keyPath) {
            console.log(key, keyPath);
        }
    }
}
</script>

<style>
.el-menu{
  border-radius: 0px;
}
.el-dropdown-link{
  cursor:pointer
}
.header-wraper li {
    float: left;
    margin-right: 20px;
    margin-top: 5px;
}
.title {
    padding: 1em .2em;
}
.title span {
    font-size: 1.4em;
    margin-left: 5px;
}
.el-select-dropdown__list{
  max-height: 187px !important;
}
.option {
    padding-top: 10px;
}
.user .el-dropdown {
    position: absolute;
    right: 20px;
    color: #fff !important;
    line-height: 59px;
}
.head-portrait{
  height: 35px;
  top: 11px;
  position: relative;
  border-radius: 20px;
}
.login{
  text-decoration: inherit;
  color: #999;
}
.menu__item{
  text-align: center;
}
.el-menu{
  background: #373d41;
}
</style>
