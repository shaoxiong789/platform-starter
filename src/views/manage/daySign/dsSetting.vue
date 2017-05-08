<template>
    <div>
        <ul class="day-set">
            <li>
                早起打卡有效时间(AM)：
                    <el-time-select
                        placeholder="起始时间"
                        v-model="data.morning.startTime"
                        :picker-options="{
                        start: '00:00',
                        step: '0:30',
                        end: '10:00'
                        }">
                    </el-time-select>
                    — —
                    <el-time-select
                        placeholder="结束时间"
                        v-model="data.morning.endTime"
                        :picker-options="{
                        start: '00:00',
                        step: '00:30',
                        end: '10:00',
                        minTime: data.morning.startTime
                        }">
                    </el-time-select>
            </li>
            <li>
               晚安打卡有效时间(PM)：
                    <el-time-select
                        placeholder="起始时间"
                        v-model="data.night.startTime"
                        :picker-options="{
                        start: '21:00',
                        step: '0:30',
                        end: '24:00'
                        }">
                    </el-time-select>
                    — —
                    <el-time-select
                        placeholder="结束时间"
                        v-model="data.night.endTime"
                        :picker-options="{
                        start: '21:00',
                        step: '0:30',
                        end: '24:00',
                        minTime: data.night.startTime
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
  import axios from 'axios'
  export default {
    data() {
      return {
        data: {
          "morning":{
            "startTime"   :null,
            "endTime"     :null
          },
          "night":{
            "startTime"   :null,
            "endTime"     :null
          }
        },
        dialogVisible: false
      };
    },
    methods:{
      async save() {
        if(!(this.data.morning.startTime&&this.data.morning.endTime&&
        this.data.night.startTime&&this.data.night.endTime)){
          this.$notify({
            title: '',
            message: '有效时间设置不能为空',
            type: 'warning'
          });
          return ;
        }
        var response = await axios.post('/api/clock/setting', this.data)
        if(response.data.code==1){
          this.$notify({
            title: '',
            message: '有效时间设置成功',
            type: 'success'
          });
          this.dialogVisible = false;
          return ;
        }
        this.$notify.error({
          title: '',
          message: '有效时间设置失败'
        });
      },
      async get() {
        var response = await axios.get('/api/clock/setting');
        return response;
      }
    },
    async created() {
      var response = await this.get();
      this.data = response.data.result;
    }
  }
</script>
<style lang="">
    ul li{
      list-style: none;
    }
</style>
