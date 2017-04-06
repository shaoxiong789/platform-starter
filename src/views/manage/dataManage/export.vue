<template>
    <div class="comm-wrap">
        <el-tabs type="border-card">
            <el-tab-pane label="数据表列表">
                <ul class="tb-list">
                    <li>
                        <router-link :to="{ path: '/manage/datamanage/export/tbUser' }">(1) - 用户信息数据表<i class="el-icon-view"></i></router-link>
                    </li>
                    <li>
                        <router-link :to="{ path: '/manage/datamanage/export/tbRecord' }">(2) - 打卡记录数据表<i class="el-icon-view"></i></router-link>
                    </li>
                </ul>
            </el-tab-pane>
        </el-tabs>
    
    </div>
</template>
<script>
export default {
    data() {
        return {

        }
    },
    methods: {
        tabClick: function (tab) {
            console.log(tab.$options.propsData)
        }
    }
}
</script>
<style>
.tb-list {
    padding: 0;
    margin: 0;
}

.tb-list a {
    color: #555;
}

.tb-list li {
    padding: 10px;
    /*display: inline-block;*/
    font-size: 18px;
    border-bottom: 1px solid #ddd;
    margin: 10px 0 20px 0;
    cursor: pointer;
}

.tb-list li:hover {
    background: #f1f1f1;
}

.tb-list li i {
    margin-left: 10px;
}

.condition {
    padding-bottom: 10px;
}

.pagination {
    /*float: right;*/
    margin-top: 30px;
}

.el-date-editor--daterange.el-input {
    width: 225px!important;
}

.user-name {
    display: inline-block;
}

.user-name .el-input {
    width: 180px;
}

.right {
    float: right;
    margin: 10px 0;
}
</style>