<template>
    <div class="home-wrap ">
        <div class="head sunbg"
             v-if="result.type='morn'">
            <div class="user-info">
                <span class="logo">
                             <img src="../logo.png" alt="logo" >
                    </span>
                <span class="continuousDays">第 <em>{{result.continuousDays}}</em> 天</span>
                <span class="medal">
                        <!--<span class="glod" v-for="item in result.medal.glod"></span>-->
                <span class="silver"></span>
                </span>
                <span class="name"
                      v-text="result.name"></span>
            </div>
    
            <span class="sun animate"></span>
            <div class="info-list mountain-sun">
                <div class="l-item">
                    <label>打卡时间</label>
                    <span v-text="result.signTime"></span>
                </div>
                <div class="l-item">
                    <label>超越人数</label>
                    <span v-text="result.beyondNum"></span>
                </div>
                <div class="l-item">
                    <label>累计天数</label>
                    <span v-text="result.totalDays"></span>
                </div>
            </div>
            <span class="bottom-flag-sun"></span>
        </div>
        <div class="word-wrap">
            <span class="word-text"
                  v-text="result.word"></span>
        </div>
        <!-- 星期 节日寄语-->
        <div class="week">
    
        </div>
    
    </div>
</template>
<script>
import moment from 'moment';

export default {
    data: () => ({
        result: {}
    }),
    mounted() {
        this.$nextTick(function () {
            this.getDate();
        })
    },
    methods: {
        getDate() {
            this.result = {
                type: 'morn',//'night'
                name: "叮叮当",// 限制最大字符个数 名字不能太长
                logo: "",
                continuousDays: 1,
                medal: {
                    glod: 0,
                    silver: 0
                },
                signTime: moment(new Date()).hours() + ":" + moment(new Date()).seconds(),
                beyondNum: "81%",
                totalDays: 1,
                word: "Genius often betrays itself into great errors.天才常被天才误。"
            }
        }
    }
}
</script>
<style scoped>
.home-wrap {
    font-family: serif;
}

.head {
    position: relative;
    padding: 10px 0px 0 0px;
}

.sunbg {
    background-color: #e1af46;
}

.mountain-sun {
    background: url(sun1.png) no-repeat center top;
    background-size: 120%;
}

.bottom-flag-sun {
    margin-bottom: -18px;
    margin-left: 18px;
    width: 25px;
    height: 21px;
    display: inline-block;
    background: url(sun2.png) no-repeat center;
    background-size: cover;
}

.sun {
    position: absolute;
    top: 20px;
    right: 100px;
    width: 60px;
    height: 60px;
    display: block;
    background: url(sun.png) no-repeat center;
    background-size: cover;
    z-index: 1;
}

.user-info {
    padding: 20px 20px;
    font-size: 12px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    text-align: center;
    color: #fff;
}

.user-info .logo {
    width: 42px;
    height: 42px;
    display: block;
    border-radius: 50%;
    /*border:1px solid #fff;*/
    box-shadow: 1px 1px 1px 1px rgba(255, 255, 255, 0.1);
}

.user-info .logo img {
    width: 100%;
}

.user-info .name {
    width: 100%;
    text-align: left;
    display: block;
    line-height: 18px;
    text-indent: 5px;
}

.user-info .continuousDays {
    margin: 0 10px;
}

.user-info .continuousDays em {
    font-style: normal;
    font-size: 22px;
    display: inline-block;
    vertical-align: sub;
}

.user-info .medal {}

.info-list {
    position: relative;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 80px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-content: space-between;
    align-items: center;
    z-index: 2;
}

.info-list .l-item {
    width: 33.3%;
    text-align: center;
    line-height: 20px;
    margin-top: 5%;
    box-sizing: border-box;
}

.info-list .l-item:nth-child(1),
.info-list .l-item:nth-child(2) {
    border-right: 1px solid #e29544;
}

.info-list .l-item label {
    display: block;
    color: #fff;
    font-size: 12px;
}

.info-list .l-item span {
    font-size: 14px;
    /*font-family: "Microsoft YaHei";*/
}

.word-wrap {
    padding: 30px 15px;
}

.word-wrap .word-text {
    vertical-align: middle;
}
</style>