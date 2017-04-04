<template>
    <div class="comm-wrap">
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
            }
        }
    }
</script>
<style>
</style>