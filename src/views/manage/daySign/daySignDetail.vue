<template>
    <div class="comm-wrap">
        <button @click="goBack()">返回上一级</button>
        <h1>daySignDetail</h1>
        {{day}}
    </div>
</template>
<script>
    export default {
        data () {
            return {
                day:''
            }
            
        },
        created () {
            this.getRoute()
        },
        methods :{
            getRoute:function(){
                console.log(this.$route.query)
                this.day =  JSON.stringify(this.$route.query)
            },
            goBack:function(){
                this.$router.go(-1);
            }
        }
    }
</script>
<style>
</style>