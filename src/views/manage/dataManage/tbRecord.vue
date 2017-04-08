<template>
    <div class="comm-wrap">
        <div class="condition">
            <el-select v-model="value"
                       placeholder="选择早安或晚安">
                <el-option v-for="item in options"
                           :label="item.label"
                           :value="item.value">
                </el-option>
            </el-select>
    
            <el-date-picker v-model="value7"
                            type="daterange"
                            align="right"
                            placeholder="选择日期范围"
                            :picker-options="pickerOptions2">
            </el-date-picker>
    
            <el-button type="primary"
                       class="right">下载表格</el-button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            options: [{
                value: '1',
                label: '早安打卡'
            }, {
                value: '2',
                label: '晚安打卡'
            }],
            value: '',
            userName: "",
            pickerOptions2: {
                shortcuts: [{
                    text: '最近一周',
                    onClick(picker) {
                        const end = new Date();
                        const start = new Date();
                        start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
                        picker.$emit('pick', [start, end]);
                    }
                }, {
                    text: '最近一个月',
                    onClick(picker) {
                        const end = new Date();
                        const start = new Date();
                        start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
                        picker.$emit('pick', [start, end]);
                    }
                }, {
                    text: '最近三个月',
                    onClick(picker) {
                        const end = new Date();
                        const start = new Date();
                        start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
                        picker.$emit('pick', [start, end]);
                    }
                }]
            },
        }
    },
    methods: {

    }
}
</script>