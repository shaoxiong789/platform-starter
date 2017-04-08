<template>
    <div class="comm-wrap">
        <el-button type="text"
                   size="mini"
                   @click="goBack()"><i class="el-icon-d-arrow-left"></i> 返回上一页</el-button>
        <h1>daySignDetail</h1> {{day}}
        <ul>
            <li> 检测有无背景图 无责显示上传编辑背景图， 有就从图片库里选择修改</li>
            <li> 同理检测每一名言</li>
        </ul>
    </div>
</template>
<script>
export default {
    data() {
        return {
            day: ''
        }

    },
    created() {
        this.getRoute()
    },
    methods: {
        getRoute: function () {
            console.log(this.$route.query)
            this.day = JSON.stringify(this.$route.query)
        },
        goBack: function () {
            this.$router.go(-1);
        }
    }
}
</script>
<style>

</style>