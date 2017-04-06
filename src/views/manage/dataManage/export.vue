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
        </div>
        <el-table :data="tableData3"
                  highlight-current-row
                  @current-change="handleCurrentChange"
                  border
                  style="width: 100%">
            <el-table-column type="index"
                             width="60">
            </el-table-column>
            <el-table-column prop="date"
                             label="日期"
                             sortable
                             width="180">
            </el-table-column>
            <el-table-column prop="name"
                             label="姓名"
                             width="180">
            </el-table-column>
            <el-table-column prop="time"
                             label="打卡时间">
            </el-table-column>
            <el-table-column fixed="right"
                             label="操作"
                             width="100">
                <template scope="scope">
                    <el-button @click="viewDetail()"
                               type="text"
                               size="small">查看个人详情</el-button>
                </template>
            </el-table-column>
        </el-table>
    
        <div class="pagination">
            <el-pagination @size-change="handleSizeChange"
                           @current-change="handleCurrentChange"
                           :current-page="currentPage"
                           :page-size="10"
                           layout="total,prev, pager, next, jumper"
                           :total="100">
            </el-pagination>
        </div>
    </div>
</template>

<script>
let tableData = [{
    date: '2016-05-03',
    name: '王小虎0',
    time: '-0-'
}, {
    date: '2016-05-02',
    name: '王小虎00',
    time: '--0'
}, {
    date: '2016-05-04',
    name: '王小虎1',
    time: '-1-'
}, {
    date: '2016-05-01',
    name: '王小虎',
    time: '虎--'
}, {
    date: '2016-05-08',
    name: '王小虎2',
    time: '-2-'
}, {
    date: '2016-05-06',
    name: '王小虎3',
    time: '-3-'
}, {
    date: '2016-05-07',
    name: '王小虎4',
    time: '-4-'
}, {
    date: '2016-05-08',
    name: '王小虎5',
    time: '-5-'
}, {
    date: '2016-05-06',
    name: '王小虎6',
    address: '-6-'
}, {
    date: '2016-05-07',
    name: '王小虎7',
    address: '-7-'
}];
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
            value7: '',
            tableData3: tableData,
            currentRow: null,
            currentPage: 5
        }
    },
    methods: {
        handleCurrentChange(val) {
            this.currentRow = val;
        },
        handleSizeChange(val) {
            console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {
            this.currentPage = val;
            console.log(`当前页: ${val}`);
        },
        viewDetail() {
            console.log(this.currentRow)
            // this.$router.push({
            //     path: "/manage/datamanage/analyse",
            //     query: {
            //         "currentRow" : this.currentRow
            //     }
            // });
        }
    }
}
</script>

<style>
.pagination {
    /*float: right;*/
    margin-top: 30px;
}

.el-date-editor--daterange.el-input {
    width: 225px!important;
}
</style>