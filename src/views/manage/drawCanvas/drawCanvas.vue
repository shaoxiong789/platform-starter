<template>
    <div class="draw-canvas comm-wrap">
        <canvas id="canvas"
                width="640"
                height="800">
            not support canvas
        </canvas>
        <img src="./bgnight.png"
             alt=""
             id="bgnight">
        <img src="./logo.png"
             alt=""
             id="logo">
        <img src="./code.png"
             alt=""
             id="code">
        <img src="./date.png"
             alt=""
             id="date">
    </div>
</template>
<script>
import moment from 'moment'
// 用canvas 代码在浏览器中画一张完整的日签
export default {
    data: () => ({
        config: {
            userLogo: "",
            bgImg: "",
            signTime: moment(new Date()).hours() + ":" + moment(new Date()).seconds(),
            totalNum: 13388,
            beyond: "81%",
            totalDays: 1
        }
    }),
    mounted() {
        this.$nextTick(function () {
            this.draw();
        });
    },
    methods: {
        getDate() {
            // ajax  获取config

        },
        draw() {
            const ctx = document.getElementById('canvas').getContext('2d');
            // const ctx2 = document.getElementById('word').getContext('2d');
            // console.log(canvas,ctx)
            this.drawStatic(ctx);
            this.drawDate(ctx);

            ctx.font = "30px serif";
            ctx.fillStyle = "#fff";
            ctx.fillText("Happiness takes no account of time.", 50, 250);
            ctx.fillText("晚安", 50, 300);
        },
        drawStatic(ctx) {

            // this._drawImage(ctx, "bgnight", 0, 0, 640, 500);
            this._drawImage(ctx, "logo", 40, 540, 85, 85);
            this._drawImage(ctx, "code", 286, 654, 102, 102);
            this._drawImage(ctx, "date", 539, 578, 45, 44);

            ctx.font = "32px serif";
            ctx.fillText(this.config.signTime, 150, 568);
            ctx.font = "16px sans-serif";
            ctx.fillStyle = "#555";
            ctx.fillText(this.config.totalNum + "人正参与活动，超过" + this.config.beyond + "的人", 150, 598);

            ctx.font = "20px serif";
            ctx.fillStyle = "#000";
            ctx.fillText("连续打卡", 525, 558);
            ctx.fillStyle = "#e3ab25";
            ctx.font = "18px serif";
            ctx.textAlign = "center";
            ctx.fillText(this.config.totalDays, 561, 615, 20);

            ctx.font = "14px serif";
            ctx.fillStyle = "#999";
            ctx.textAlign = "start";
            ctx.fillText("扫码和我互道晚安", 280, 780);
        },
        _drawImage(ctx, id, x, y, w, h) {
            //  draw bgImg
            // let img = new Image();
            // img.src = "./bgnight.png"; // url error
            let img = document.getElementById(id);
            img.onload = function () {
                ctx.drawImage(img, x, y, w, h);
            }
        },
        drawDate(ctx) {
            ctx.font = "14px serif";
            ctx.fillStyle = "#fff";
            let day = new Date();
            ctx.fillText(moment(day).format("YYYY/MM/DD"), 565, 468);
            ctx.fillText(this.weekFormat(moment(day).weekday()), 600, 485);

        },
        _drawcirclebg(ctx) {
            //二维码渐变背景
            var x1 = 333;   // 第一个圆圆心的X坐标
            var y1 = 701;   // 第一个圆圆心的Y坐标
            var r1 = 10;    // 第一个圆的半径
            var x2 = 333;   // 第二个圆圆心的X坐标
            var y2 = 701;   // 第二个圆圆心的Y坐标
            var r2 = 80;   // 第二个圆的半径
            var radialGradient = ctx.createRadialGradient(x1, y1, r1, x2, y2, r2);
            radialGradient.addColorStop(0, 'rgba(0,0,0,0.2)');
            radialGradient.addColorStop(1, '#fff');
            ctx.fillStyle = radialGradient;

            ctx.beginPath();
            //设置弧线的颜色为蓝色
            ctx.strokeStyle = radialGradient;
            var circle = {
                x: 333,    //圆心的x轴坐标值
                y: 701,    //圆心的y轴坐标值
                r: 80      //圆的半径
            };
            ctx.arc(circle.x, circle.y, circle.r, 0, Math.PI * 2, true);
            //ctx.stroke();
            ctx.fill();

        },
        weekFormat(number) {
            var weekday = "";
            switch (number) {
                case 0: weekday = "周一"; break;
                case 1: weekday = "周二"; break;
                case 2: weekday = "周三"; break;
                case 3: weekday = "周四"; break;
                case 4: weekday = "周五"; break;
                case 5: weekday = "周六"; break;
                case 6: weekday = "周日"; break;
            }
            return weekday;
        }
        // fillText

        //  draw logo 

        // draw 二维码

    }
}



</script>
<style scoped>
canvas#canvas {
    width: 640px;
    height: 800px;
    background:url(bgnight.png) no-repeat;
}
canvas{
    box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.2);
    background-color: transparent;
}
img {
    display: none;
}
</style>