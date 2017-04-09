<template>
    <div class="comm-wrap ds-wrap">
        <el-button type="text"
                   size="mini"
                   @click="goBack()"><i class="el-icon-d-arrow-left"></i> 返回上一页</el-button>
        <h1>daySignDetail</h1> {{day}}
        <ul>
            <li> -检测有无背景图 无-显示上传编辑背景图， 有-从图片库里选择修改 <br>
                -图片上传剪切 图片必须是640*500的尺寸
            </li>
            <li> -同理检测每一名言 xy 位置 size 大小  可配置</li>
             - 早安 晚安的 是否显示
            <li>- 同步右侧预览功能</li>
               
        </ul>
        

        <div class="ds-setting">
            <div class="select-type">
                <label for="">选择：</label>
                <el-radio class="radio" v-model="radio" label="1">早安</el-radio>
                <el-radio class="radio" v-model="radio" label="2">晚安</el-radio>                       
            </div>
        </div>
        <div class="ds-preview">
            <div class="ds-pw-img"><img src="../../../assets/image/t1.png" class="image"></div>
            <input type="button" class ="comm-blue" :class ="{"preview":true}"
            <span class="tip">{{msg}}</span>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            day: '',
            msg:"缺少图片背景和每一名言"
        }

    },
    created() {
        this.getRoute()
    },
    watch:{
    'radio'(val, oldVal){
      console.log(val, oldVal)
            this.warning();
        }
    },
    methods: {
        getRoute: function () {
            console.log(this.$route.query)
            this.day = JSON.stringify(this.$route.query)
        },
        goBack: function () {
            this.$router.go(-1);
        },
        warning() {
            this.$confirm('切换早晚将清除未保存设置, 是否保存?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                this.$message({
                    type: 'success',
                    message: '保存成功!'
                });
            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '已取消保存 '
                });          
            });
            //非自动保存 不然如何预览
      }
    }
}
</script>
<style>
.ds-setting{

}
.ds-preview{

}
.ds-pw-img{
    width:640px;
}
</style>