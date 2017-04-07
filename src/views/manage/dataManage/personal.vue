<template>
    <div class="comm-wrap">
        个人打卡情况
        生成打卡记录图
        注册时间，积分排名，勋章数🎖（连续打卡22天获得一颗勋章）
        朋友圈人数，排名
        打卡时间折线图（早安卡，晚安卡） 标出最早，最晚
        
    </div>
</template>
<script>
    export default {
        data (){
            return {
                id:""
            }
        },
        mounted:function(){
            console.log(this.$route.params)
        },
        methods: {
            
        }
    }
</script>
<style>
    
</style>