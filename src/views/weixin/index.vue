<template>
    <div class="weixin-wrap">
        <!-- 微信的界面-->
        <router-view></router-view>
        <footer>
            <router-link :to="{ path: '/weixin/home' }" class="fm-home"></router-link>
            <router-link :to="{ path: '/weixin/record'}" class="fm-record"></router-link>
            <router-link :to="{ path: '/weixin/rankingList' }" class="fm-rlist"></router-link>
        </footer>
    </div>
</template>
<script>
// 共享一些账户信息

export default {
    data() {
        return {
            resultList:[{
                logo:"",
                userName:"哇哈哈",
                totalDays:24,
                zanNums:37
            },{
                logo:"",
                userName:"叮叮当",
                totalDays:24,
                zanNums:11
            },{
                logo:"",
                userName:"一枝梅",
                totalDays:24,
                zanNums:3
            },{
                logo:"",
                userName:"可爱小孩",
                totalDays:24,
                zanNums:1
            }]
        }
    }
}
</script>
<style>
.weixin-wrap{
    height:100%;
    padding-bottom:50px;
}
footer{
    width: 100%;
    position:fixed;
    bottom:0;
    left:0;
    display: flex;   
    height: 46px;
    flex-wrap: wrap;
    justify-content: space-between;
    align-content: space-between;
    background-color:#fff;
}
footer a {  
    width: 33%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: 30px;
    text-align: center;
    border-top:1px solid #ddd;
    border-right:1px solid #ddd;
}

footer a:active {
    color: orange;
}
.fm-home{
    background-image: url(fm-home.png);
}
.fm-record{
    background-image: url(fm-record.png);
    background-size: 24px;
}
.fm-rlist{
    background-image: url(fm-rlist.png);
    border-right:none;
}
.fm-home.router-link-active{
    background-image: url(fm-home2.png);
}
.fm-record.router-link-active{
    background-image: url(fm-record2.png);
}
.fm-rlist.router-link-active{
    background-image: url(fm-rlist2.png);
}
</style>