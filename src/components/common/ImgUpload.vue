<template>
  <div>
    <div class="andArea" v-if="value==''">
      <div class="filePicker" @click="strike">点击上传图片</div>
      <input type="file" style="display:none" @change="fileChange($event)"/>
    </div>
    <div class="andArea" v-if="value!=''" style="background-size:100% 100%" :style="{'background-image':'url('+value+')'}">
      <!-- <img style="width: 100%;height: 100%;position: absolute;top: 0px;left: 0px;" :src="value"/> -->
      <div class="filePicker clear" @click="clear">清除图片</div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'imgUpload',
  props: ['value'],
  data() {
    return {
      fileValue:null,
      imgData:null
    }
  },
  watch:{
    value(val,oldVal){
      console.log(val)

    }
  },
  methods: {
    strike() {
      var $file = this.$el.querySelector('[type=file]')
      return $file.click();
    },
    fileChange($event) {
      var fileReader = new FileReader()
      console.log(fileReader)
      fileReader.readAsDataURL($event.target.files[0]);
      // console.log(fileReader.result)
      fileReader.onload = ()=>{
        this.imgData = fileReader.result
        this.$emit('change',this.imgData,(url)=>{
          this.value = url;
        })
      }
    },
    clear(){
      this.$emit('clear')
    }
  },
  mounted() {
    //将base64格式的图片数据存到imgData
  }
}
</script>
<style scoped>
.andArea{
    height: 100%;
    box-sizing: border-box;
    border: 1px dashed #E6E6E6;
    color: #CCCCCC;
    font-size: 18px;
    padding-top: 50%;
    position: relative;
    text-align: center;
    top: 0;
}
.filePicker:hover {
    background: none repeat scroll 0 0 #00A2D4;
}
.filePicker {
    background: none repeat scroll 0 0 #00B7EE;
    border-radius: 3px;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
    color: #FFFFFF;
    cursor: pointer;
    display: inline-block;
    font-size: 18px;
    height: 44px;
    line-height: 44px;
    width: 40%;
    min-width: 120px;
    margin: 0 auto 0px;
    overflow: hidden;
    transition: background 0.2s;
    -moz-transition: background 0.2s;
    -webkit-transition: background 0.2s;
    -o-transition: background 0.2s;
}
.filePicker.clear {
    display: none;
}
.andArea:hover .filePicker.clear{
    display:block;
}
</style>
