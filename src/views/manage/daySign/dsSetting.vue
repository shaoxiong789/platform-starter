<template>
    <div>
        <ul class="day-set">
            <li>
                早起打卡有效时间(AM)：
                    <el-time-select
                        placeholder="起始时间"
                        v-model="MornStartTime"
                        :picker-options="{
                        start: '00:00',
                        step: '0:30',
                        end: '10:00'
                        }">
                    </el-time-select>
                    — —
                    <el-time-select
                        placeholder="结束时间"
                        v-model="MornEndTime"
                        :picker-options="{
                        start: '00:00',
                        step: '00:30',
                        end: '10:00',
                        minTime: MornStartTime
                        }">
                    </el-time-select>
            </li>
            <li>
               晚安打卡有效时间(PM)：                    
                    <el-time-select
                        placeholder="起始时间"
                        v-model="NightStartTime"
                        :picker-options="{
                        start: '9:00',
                        step: '0:30',
                        end: '12:00'
                        }">
                    </el-time-select>
                    — —
                    <el-time-select
                        placeholder="结束时间"
                        v-model="NightEndTime"
                        :picker-options="{
                        start: '9:00',
                        step: '0:30',
                        end: '12:00',
                        minTime: NightStartTime
                        }">
                    </el-time-select>
            </li>
            <li>
                <el-button type="success" @click="dialogVisible = true">保存</el-button>
            </li>
        </ul>
        

        <el-dialog title="提示" v-model="dialogVisible" size="tiny">
            <span>是否确定保存修改？</span>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="save()">确 定</el-button>
            </span>
        </el-dialog>      
      
    </div>
</template>

<script>
  export default {
    data() {
      return {
        MornStartTime: '4:00',
        MornEndTime: '8:00',
        NightStartTime: '9:00',
        NightEndTime: '12:00',
        dialogVisible: false
      };
    },
    methods:{
        save:function(){
            this.dialogVisible = false;
        }
    }
  }
</script>
<style lang="">
    ul li{
      list-style: none;
    }  
</style>