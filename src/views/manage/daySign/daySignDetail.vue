<template>
    <div class="comm-wrap ds-wrap">
        <el-button type="text"
                   size="mini"
                   @click="goBack()"><i class="el-icon-d-arrow-left"></i> 返回日历</el-button>
        <div class="day-info">
            {{day}}
        </div>
        <!--<ul>
                <li>{{day}}</li>
                <li> -检测有无背景图 无-显示上传编辑背景图， 有-从图片库里选择修改 <br>
                    -图片上传剪切 图片必须是640*500的尺寸
                </li>
                <li> -同理检测每一名言 xy 位置 size 大小  可配置</li>
                - 早安 晚安的 是否显示
                <li>- 同步右侧预览功能</li>
                //检测过期  在今天之前的 没法修改
            </ul> -->

        <div class="ds-item">
            <div class="ds-setting">
                <el-form label-width="80px"
                         :model="daySign">
                    <el-form-item>
                        <el-tag type="success">{{daySign.morning.name}}</el-tag>
                    </el-form-item>
                    <el-form-item label="早安美图">
                        <el-input v-model="daySign.morning.bg" readonly></el-input>
                        
                         <!--<el-button style="margin-left: 10px;" size="mini" type="success" @click="selectUpload">上传图片
                         </el-button>
                        <input type="file" value="" style="display:none;" @change="getImgInfo"></input>-->
                         
                        <!-- :http-request="submitUpload" -->
                        <el-upload class="upload-demo"
                                   ref="upload"
                                   action="http://localhost/api/imager/upload/"
                                   :multiple="false"
                                   :on-change="handleChange"                                 
                                   :on-preview="handlePreview"
                                   :before-upload="beforeUpload"
                                   :auto-upload="false">
                            <el-button size="mini" slot="trigger"
                                       type="primary">上传图片</el-button>
                            <el-button style="margin-left: 10px;" size="mini" type="success" @click="submitUpload">上传到服务器</el-button>                                       
                            <div slot="tip"
                                 class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
                        </el-upload> 
                    </el-form-item>
                    <el-form-item label="早安一言">
                        <el-input v-model="daySign.morning.word.text"></el-input><span class="tip">（限制30个字符）</span>
                    </el-form-item>
                    <el-form-item label="一言布局">
                        <el-row>
                            <el-col :span="11">
                                font-size :
                                <input type="text"
                                       class="comm-input"
                                       v-model="daySign.morning.word.fontSize"> px
                            </el-col>
                            <el-col :span="11">
                                color :
                                <el-color-picker v-model="daySign.morning.word.color"></el-color-picker>
                            </el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="11">
                                position.X :
                                <input type="text"
                                       class="comm-input"
                                       v-model="daySign.morning.word.x"> px
                            </el-col>
                            <el-col :span="11">
                                position.Y :
                                <input type="text"
                                       class="comm-input"
                                       v-model="daySign.morning.word.y"> px
                            </el-col>
                        </el-row>
                    </el-form-item>
                    <el-form-item>
                        <input type="button"
                               class="el-button el-button--primary el-button--small"
                               v-bind:disabled="false"
                               value="预览"
                               @click="preview" />
                        <span class="tip">{{msg1}}</span>
                    </el-form-item>
                </el-form>
            </div>
            <div class="ds-preview">
                <div class="ds-pw-img" v-if="daySign.morning.prewImage !=''">
                    <img :src="daySign.morning.prewImage" class="image" >                       
                </div>
            </div>
        </div>

        <div class="ds-item">
            <div class="ds-setting">
                <el-form label-width="80px"
                         :model="daySign">
                    <el-form-item>
                        <el-tag type="warning">{{daySign.night.name}}</el-tag>
                    </el-form-item>
                    
                    <el-form-item label="晚安美图">
                        <el-input v-model="daySign.night.bg" readonly></el-input>
                        <el-upload class="upload-demo"
                                   action="http://localhost/api/imager/upload/"
                                   :on-preview="handlePreview"
                                   :before-upload="beforeUpload"
                                   :auto-upload="false"
                                   :show-file-list="false">
                            <el-button size="mini"
                                       type="primary">上传图片</el-button>
                            <div slot="tip"
                                 class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
                        </el-upload>
                    </el-form-item>
                    <el-form-item label="晚安一言">
                        <el-input v-model="daySign.night.word.text"></el-input><span class="tip">（限制30个字符）</span>
                    </el-form-item>
                    <el-form-item label="一言布局">
                        <el-row>
                            <el-col :span="11">
                                font-size :
                                <input type="text"
                                       class="comm-input"
                                       v-model="daySign.night.word.fontSize"> px
                            </el-col>
                            <el-col :span="11">
                                color :
                                <el-color-picker v-model="daySign.night.word.color"></el-color-picker>
                            </el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="11">
                                position.X :
                                <input type="text"
                                       class="comm-input"
                                       v-model="daySign.night.word.x"> px
                            </el-col>
                            <el-col :span="11">
                                position.Y :
                                <input type="text"
                                       class="comm-input"
                                       v-model="daySign.night.word.y"> px
                            </el-col>
                        </el-row>
                    </el-form-item>
                    <el-form-item>
                        <input type="button"
                               class="el-button el-button--primary el-button--small"
                               v-bind:disabled="false"
                               value="预览"
                               @click="preview" />
                        <span class="tip">{{msg2}}</span>
                    </el-form-item>

                </el-form>

            </div>
            <div class="ds-preview">
                <div class="ds-pw-img" v-if="daySign.night.prewImage !=''">
                    <img :src="daySign.night.prewImage" class="image" >                       
                </div>
            </div>
        </div>
        <br>
        <el-button type="success"
                @click="save()">保存</el-button>
        <canvas id="convertbase64" width="640" height="500" style="width:640px;height:500px; display:none;"></canvas>
        

    </div>
</template>
<script>
import moment from 'moment';
import axios from 'axios';
export default {
    data() {
        return {
            imgBaseURl:" http://oo8xbcend.bkt.clouddn.com/",
            day: '',
            msg1: "",
            msg2: "",
            daySign: {
                id: "",
                day: "",
                morning: {
                    name: "早起打卡",
                    bg: "",
                    word: {
                        text: "",
                        fontSize: 0,
                        color: "#fff",//默认 #fff
                        x: 0,//默认  0
                        y: 0
                    },
                    prewImage:""
                },
                night: {
                    name: "晚安打卡",
                    bg: "",
                    word: {
                        text: "",
                        fontSize: 0,
                        color: "#fff",//默认 #fff
                        x: 0,//默认  0
                        y: 0
                    },
                    prewImage:""
                }
            },
            file:{},
            images:[]
        }

    },
    async created() {
        this.getDate();
        await this.getDaySign();
       
    },
    watch: {
        // 'radio'(val, oldVal) {
        //     console.log(val, oldVal)
        //     this.openWarning();
        // }
    },
    methods: {
        async getDaySign(){
          var response = await axios.get('/api/clock/calendar/detail', {
            params: {
              day: moment(this.$route.query.day).format("YYYY-MM-DD")
            }
          });
          if(response.status==200){
            // console.log("response",response)
            if(response.data.code==1){
              var daySign = response.data.result;
              this.daySign.id = daySign._id;
              this.daySign.day = daySign.day;
              if(daySign.morning){
                this.daySign.morning.bg = daySign.morning.bg;
                if(daySign.morning.word){
                  this.daySign.morning.word.text = daySign.morning.word.text;
                  this.daySign.morning.word.fontSize = daySign.morning.word.fontSize;
                  this.daySign.morning.word.color = daySign.morning.word.color;
                  this.daySign.morning.word.x = daySign.morning.word.x;
                  this.daySign.morning.word.y = daySign.morning.word.y;
                }
              }
              if(daySign.night){
                this.daySign.night.bg = daySign.night.bg;
                if(daySign.night.word){
                  //this.daySign.night.word = daySign.morning.word ;
                  this.daySign.night.word.text = daySign.morning.word.text;
                  this.daySign.night.word.fontSize = daySign.night.word.fontSize;
                  this.daySign.night.word.color = daySign.night.word.color;
                  this.daySign.night.word.x = daySign.night.word.x;
                  this.daySign.night.word.y = daySign.night.word.y;
                }
              }

              // this.daySign = response.data.result
            }
          }
        },
        getDate() {
            // this.daySign.day = JSON.stringify(this.$route.query.day);
            // this.day = this.daySign.day ;
            this.day = "选择日期为： "+moment(this.$route.query.day).format("YYYY-MM-DD");
        },
        goBack() {
            this.$router.go(-1);
        },
        openWarning() {
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
        },
        handleChange(file, fileList){
            this.file = file.url;
            console.log("handleChange",file);
        },
        handlePreview(file) {
            this.file = file.url;
            // console.log("handlePreview",file);
        },
        beforeUpload(file) {
           this.file = file.url;
        //    console.log("beforeUpload",file);
            // 检测图片大小 还有 和格式
            const isJPGPNG = file.type === 'image/jpeg' || file.type === 'image/png';
            const isLt2M = file.size / 1024 / 1024 < 0.5;

            if (!isLt2M) {
                this.$message.error('上传头像图片大小不能超过 500k!');
            }
            return isJPGPNG && isLt2M;
        },
        preview(flag) {
            //点击预览 报错 出现友情提示 msg1 msg1
            this.msg1 = "友情提示：缺少背景图"; //必须
            this.msg2 = "友情提示：缺少每日名言"
        },
        selectUpload(e){
            // this.$el('input[type=file]').trigger('click');
        },
        getImgInfo(e){
            var files = e.target.files || e.dataTransfer.files;
            if (!files.length)return; 
            console.log(files)
            this.createImage(file);
            this.file = this.images;
        },
        createImage(file) {
                if(typeof FileReader==='undefined'){
                     this.$message.error('您的浏览器不支持图片上传，请升级您的浏览器');
                    return false;
                }
                var image = new Image();         
                var vm = this;
                var leng=file.length;
                for(var i=0;i<leng;i++){
                    var reader = new FileReader();
                    reader.readAsDataURL(file[i]); 
                    reader.onload =function(e){
                        vm.images.push(e.target.result);                                    
                    };                 
                }                        
            },
        //上传图片自动只截取640*500 多图叠加
        submitUpload(){
            // this.$refs.upload.handleChange();
            const that = this;
            console.log("this.file",this.file);
            const testImg = this.file; 
            console.log("this.$refs.upload",this.$refs.upload);
            this.imgConvertbase64(testImg,function(base64){
                //this.$refs.upload.submit();
                var param = new FormData();
                param.append('img',base64);
                // var config = {
                //     headers:{"Content-Type": "multipart/form-data"}
                // }
                axios.post('api/imager/upload/',param)
                    .then(function (response) {
                        if(response.data.code == 1){
                            console.log(response.data.result);
                            that.daySign.morning.bg = that.imgBaseURl + response.data.result.pathname ;
                            console.log(that.daySign.morning.bg)
                            that.daySign.morning.prewImage = that.daySign.morning.bg;
                            that.$refs.upload.clearFiles();
                            // that.$refs.upload.abort();
                                // pathname: "133bcfad87f563eadb4fed83.png"
                                // updateTime:"2017-05-08T09:34:44.541Z"
                                // _id:"133bcfad87f563eadb4fed83"
                        }                       
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            });
           
        },
        imgConvertbase64(url,cb){
            var canvas = document.getElementById('convertbase64');
            const ctx = canvas.getContext('2d');
            this._drawImage(ctx, url, 0, 0, 640, 500, function () {                
                const base64 = canvas.toDataURL();
                // console.log(base64)
                cb(base64);
            });

        },
        _drawImage(ctx, url, x, y, w, h, callback) {
            //  draw bgImg
            let img = new Image();
            img.src = url; //"./bgnight.png"; // url  实际用URL
            // let img = document.getElementById(id);
            img.onload = function () {
                // 先清空画板 
                ctx.clearRect(0,0,w,h);
                //ctx.drawImage(img, x, y, w, h); //drawImage(image, x, y, width, height)//缩放
                ctx.drawImage(img, 0, 0, w, h, 0, 0, w, h) //切片 ctx.drawImage(img, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)
                if (callback != null) {
                    callback();
                }
            }
        },
        save() {
            console.log("save")
            // if(this.validate()){
                axios.post('api/clock/calendar/save', {
                    params: {
                        // "day":this.day,
                        // "morning":this.daySign.morning,
                        // "night":this.daySign.night
                        "day":"2017-05-17",
                        "morning":{
                                "bg":"String",
                                "word":{
                                    "text":"晚安吧",
                                    "fontSize":14,
                                    "color":"#FFF",
                                    "x":0,
                                    "y":0
                                }
                        },
                        "night":{
                            "bg":"String",
                            "word":{
                                "text":"早安吧",
                                "fontSize":14,
                                "color":"#FFF",
                                "x":0,
                                "y":0
                            }
                        }
                    }
                })
                .then( (response) => {
                    console.log(response);
                })
                .catch( (error) => {
                    console.log(error);
                });
            // }

        },
        validate(){

            return true;
        }
    }
}
</script>
<style>
.ds-wrap {
    padding: 20px 0;
}

.el-form-item label {
    /*line-height:36px!important;*/
}

.ds-item {
    /*width:48%;
    display:inline-block;*/
    overflow: hidden;
    clear: both;
}

.comm-input {
    width: 30px;
    border-radius: 4px;
    border: 1px solid #bfcbd9;
    box-sizing: border-box;
}

.el-color-picker__trigger {
    border: none;
}

.ds-item .el-form-item {
    margin-bottom: 0px!important;
}

.ds-setting {
    width: 50%;
    float: left;
}

.day-info {
    font-size: 16px;
    display: inline-block;
    /*float: left;*/
    /*width: 42%;*/
    margin-left:10%;
    margin-bottom: 10px;
}

.ds-preview {
    width: 42%;
    float: right;
    padding-left: 8%;
}

.ds-pw-img {
    width: 320px;
    box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.3);
    margin-bottom: 20px;
}
</style>
