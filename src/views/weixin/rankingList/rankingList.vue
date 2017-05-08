<template>
    <div class="ranking-list-wrap">
       <div class="ds-tabs">
            <span class="sun" :class="{'active':isMorning}" @click="selectTabs('morning')"><span class="icon"></span><em>早起</em></span>
            <span class="moon" :class="{'active':!isMorning}" @click="selectTabs('night')"><span class="icon"></span><em>睡眠</em></span>
        </div>
        <div class="r-list">
            <ul>
                <li v-for="(item,index) in resultList">
                    <span class="index"></span>
                    <!--<span class="logo-img"><img :src="item.logo"></span>-->
                    <span class="user-name">{{item.userName}}</span>
                    <span class="total-days">{{item.totalDays}}</span>
                    <span class="zan-nums">{{item.zanNums}}</span>
                </li>
            </ul>
        </div>

        <div class="bottom-links">
            <a class="article-link" href="">早起活动</a>
            <a class="article-link" href="">共同打卡</a>
        </div>
    </div>
</template>
<script>
export default {
    name:"",
    data:()=>({
        isMorning:true,
        resultList:[{
            logo:"../record/friend1.png",
            userName:"哇哈哈",
            totalDays:244,
            zanNums:23
        },{
            logo:"../record/friend2.png",
            userName:"叮叮当",
            totalDays:33,
            zanNums:23
        },{
            logo:"../record/friend3.png",
            userName:"一枝梅",
            totalDays:22,
            zanNums:23
        },{
            logo:"",
            userName:"小可爱",
            totalDays:1,
            zanNums:23
        }]
    }),
    methods:{
        getData(){
            // this.randomData();
        },
        selectTabs(type){
            if(type=="morning"){
                this.isMorning = true;
            }else{
                 this.isMorning = false;
            }
           this.getData();
        }
    }
}
</script>
<style>
.ranking-list-wrap{
    padding:10px 2%;
}
.ranking-list-wrap .r-list{
    
}
.r-list .index{

}
.r-list .logo-img{

}
.r-list .user-name{

}
.r-list .total-days{

}
.r-list .zan-nums{

}
</style>