<template>
    <div class="comm-wrap">
     <el-tabs type="border-card">
        <el-tab-pane label="早起日签背景">
            <ul>
                <li>今日时间：{{dateNow}}</li>
                <li>日签背景图还剩余：{{leftNum}}张</li>
                <li>(如果剩余为零，随机从前边的日子的图片取)</li>
            </ul>
            <el-upload
                class="upload upload-morn"
                action="https://jsonplaceholder.typicode.com/posts/"
                :on-preview="handlePreview"
                :on-remove="handleRemove"
                :file-list="fileList2"
                :before-upload="beforeUpload"
                list-type="picture">
                <el-button size="small" type="primary">点击上传</el-button>
                <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
            </el-upload>           
        </el-tab-pane>
        <el-tab-pane label="晚安日签背景">
            <ul>
                <li>今日时间：{{dateNow}}</li>
                <li>日签背景图还剩余：{{leftNum}}张</li>
                <li>(如果剩余为零，随机从前边的日子的图片取)</li>
            </ul>
             <el-upload
                class="upload upload-night"
                action="https://jsonplaceholder.typicode.com/posts/"
                :on-preview="handlePreview"
                :on-remove="handleRemove"
                :file-list="fileList2"
                :before-upload="beforeUpload"
                list-type="picture">
                <el-button size="small" type="primary">点击上传</el-button>
                <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
            </el-upload>           
        </el-tab-pane>
    </el-tabs>   

    </div>
</template>

<script>
  export default {
    data() {
      return {
        dateNow:'',
        leftNum:0,
        fileList2: [
            {
                name: 'food.jpeg', 
                url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
            }, 
            {
                name: 'food2.jpeg', 
                url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}
            ]
      };
    },
    mounted:function(){
        this.$nextTick(function(){
            this.init();
            this.dateNow = new Date(); //分上午还是下午
        })
    },
    methods: {
      init:function(){
        //查询剩余日签背景图片情况
        
      },
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      },
      beforeUpload(file) {
          // 检测图片大小 还有 和格式
        const isJPGPNG = file.type === 'image/jpeg'||file.type === 'image/png';  
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2M!');
        }
        return isJPGPNG&&isLt2M;
      }
    }
  }
</script>
<style>
.comm-wrap{
    padding:20px;
}
 .upload{
     width:500px;
     margin:30px 0;
 }
</style>