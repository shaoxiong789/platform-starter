<template>
    <div class="comm-wrap">
      <el-row>
          <el-col :span="8" v-for="(item, index) in templateList" :offset="index > 0 ? 2 : 0">
              <el-card :body-style="{ padding: '0px' }">
               <img :src="item.imgUrl" class="image">
               <img src="../../../assets/image/t1.png" class="image">
              <div style="padding: 14px;">
                  <span>{{item.name}}</span>
                  <div class="bottom clearfix">
                    <el-button type="text" class="button">设为模板</el-button>
                  </div>
              </div>
              </el-card>
          </el-col>
      </el-row>   
    </div>

</template>

<script>
const  image = "../../../assets/image/"

export default {
  data() {
    return {
      templateList:[
        {
          name:"排版1",
          imgUrl: image + "t1.png"
        },
        {
          name:"排版2",
          imgUrl: image + "t2.png"
        }
      ]
    }
  }
}
</script>

<style>
  .time {
    font-size: 13px;
    color: #999;
  }
  
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  
  .clearfix:after {
      clear: both
  }
</style>

