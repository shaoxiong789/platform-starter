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
                    </el-form-item>
                    <el-form-item label="早安一言">
                        <el-input v-model="daySign.morning.word.text"></el-input><span class="tip">（限制30个字符）</span>
                    </el-form-item>
                    <el-form-item label="一言布局">
                        <el-row>
                            <el-col :span="11">
                                font-size :
                                <input type="number"
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
                <img-upload style="width:340px;height:400px" @change="uploadChangeMorning"
                @clear="daySign.morning.bg=''"
                v-model="morningImg"
                ></img-upload>
            </div>
        </div>

        <div class="ds-item">
            <div class="ds-setting">
                <el-form label-width="80px"
                         :model="daySign">
                    <el-form-item>
                        <el-tag type="warning">{{daySign.night.name}}</el-tag>
                    </el-form-item>
                                   <!--"-->

                    <el-form-item label="晚安美图">
                        <el-input v-model="daySign.night.bg" readonly></el-input>
                    </el-form-item>
                    <el-form-item label="晚安一言">
                        <el-input v-model="daySign.night.word.text"></el-input><span class="tip">（限制30个字符）</span>
                    </el-form-item>
                    <el-form-item label="一言布局">
                        <el-row>
                            <el-col :span="11">
                                font-size :
                                <input type="number"
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
                <img-upload style="width:340px;height:400px" @change="uploadChangeNight"
                @clear="daySign.night.bg=''"
                v-model="nightImg"
                ></img-upload>
            </div>
            <canvas id="convertbase64" width="640" height="500" style="width:640px;height:500px; display:none;"></canvas>
        </div>

        <br>
        <el-button type="success"
                @click="save()">保存</el-button>

    </div>
</template>
<script>
import moment from 'moment';
import axios from 'axios';
import ImgUpload from '../../../components/common/ImgUpload.vue';
import QiNiuImage from '../../../utils/QiNiuImage.js'
export default {
    data() {
        return {
            imgBaseURl:"http://oo8xbcend.bkt.clouddn.com/",
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
                        fontSize: 12,
                        color: "#FFFFFF",//默认 #fff
                        x: 0,//默认  0
                        y: 0
                    }
                },
                night: {
                    name: "晚安打卡",
                    bg: "",
                    word: {
                        text: "",
                        fontSize: 12,
                        color: "#FFFFFF",//默认 #fff
                        x: 0,//默认  0
                        y: 0
                    }
                }
            },
            file:{}
        }
    },
    computed:{
      morningImg() {
        if(this.daySign.morning.word.text){
          return new QiNiuImage().createTextWater(this.daySign.morning.bg)
          .text(this.daySign.morning.word.text)
          .fontSize(this.daySign.morning.word.fontSize)
          .fill(this.daySign.morning.word.color)
          .dx(this.daySign.morning.word.x)
          .dy(this.daySign.morning.word.y)
          .gravity("NorthWest")
          .toUrl();
        }else{
          return this.daySign.morning.bg;
        }
      },
      nightImg() {
        if(this.daySign.night.word.text){
          return new QiNiuImage().createTextWater(this.daySign.night.bg)
          .text(this.daySign.night.word.text)
          .fontSize(this.daySign.night.word.fontSize)
          .fill(this.daySign.night.word.color)
          .dx(this.daySign.night.word.x)
          .dy(this.daySign.night.word.y)
          .gravity("NorthWest")
          .toUrl();
        }else{
          return this.daySign.night.bg;
        }
      }
    },
    components: {
      ImgUpload
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
                  this.daySign.night.word.text = daySign.night.word.text;
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
            this.daySign.day = this.$route.query.day;
            // this.day = this.daySign.day ;
            this.day = "选择日期为： "+moment(this.$route.query.day).format("YYYY-MM-DD");
        },
        goBack() {
            this.$router.go(-1);
        },
        preview(){

        },
        save() {
            axios.post('/api/clock/calendar/save', this.daySign)
            .then( (response) => {
              if(response.data.code == 1){
                this.$notify({
                  title: '',
                  message: '日签图片设置成功',
                  type: 'success'
                });
              }
            })
            .catch( (error) => {
                console.log(error);
            });
        },
        uploadChangeMorning(imgData,change){
          var param = new FormData();
          param.append('img',imgData);
          axios.post('/api/imager/upload/',param)
          .then( (response)=> {
            if(response.data.code == 1){
              this.daySign.morning.bg = this.imgBaseURl + response.data.result.pathname
            }
          }).catch(function (error) {
            console.log(error);
          });
        },
        uploadChangeNight(imgData,change){
          var param = new FormData();
          param.append('img',imgData);
          axios.post('/api/imager/upload/',param)
          .then( (response)=> {
            if(response.data.code == 1){
              this.daySign.night.bg = this.imgBaseURl + response.data.result.pathname
            }
          }).catch(function (error) {
            console.log(error);
          });
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