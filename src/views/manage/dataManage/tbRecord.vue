<template>
    <div class="comm-wrap">
        <div class="condition">
            <el-date-picker v-model="dateRange"
                            type="daterange"
                            align="right"
                            placeholder="选择日期范围"
                            :picker-options="pickerOptions2">
            </el-date-picker>
            <div class="user-name">
                <el-input v-model="userName"
                          placeholder="请输入用户姓名"></el-input>
            </div>
            <el-button type="primary" @click="search()"><i class="el-icon-search "></i>  查询</el-button>
            <el-button type="primary"
                       class="right">下载表格</el-button>
        </div>
        <el-table :data="tableData"
                  highlight-current-row
                  stripe
                  style="width:100%">
            <el-table-column type="index"
                             width="60">
            </el-table-column>
            <el-table-column prop="id"
                             label="ID"
                             width="120">
            </el-table-column>
            <el-table-column prop="userId"
                             label="用户ID"
                             width="120">
            </el-table-column>                
            <el-table-column prop="name"
                             label="姓名">
            </el-table-column>
            <el-table-column prop="time"
                             label="打卡时间"
                             sortable
                             :formatter="formatDate">
            </el-table-column>
            <el-table-column prop="type"
                            label="类型"
                            :filters="[{ text: '早安', value: '早安' }, { text: '晚安', value: '晚安' }]"
                            :filter-method="filterTag">
                    <template scope="scope">
                        <el-tag
                        :type="scope.row.type === '晚安' ? 'primary' : 'success'"
                        close-transition>{{scope.row.type}}</el-tag>
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
import moment from 'moment';
let tableData = [{
    id:"",
    userId:"",
    name:"某某某",
    type:"晚安",
    time:new Date()
},{
    id:"",
    userId:"",
    name:"某某某",
    type:"早安",
    time:new Date()
},{
    id:"",
    userId:"",
    name:"某某某",
    type:"晚安",
    time:new Date()
}]
export default {
    data() {
        return {
            userName: "",
            dateRange:[],//日期范围
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
            tableData: tableData,
            currentRow: null,
            currentPage: 1
        }
    },
    mountd (){
        this.search();//默认全部查询
    },
    methods: {
        filterTag(value, row) {
            return row.type === value;
        },
        formatDate(row, column){
            // console.log(row, column)
            return moment(row.date).format("YYYY-MM-DD HH:MM");
        },
        handleSizeChange(val) {
            console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {
            this.currentPage = val;
            console.log(`当前页: ${val}`);
        },
        search() {
            /**根据用户姓名模糊查询
             * 如姓名为空userName ，则根据dateRange
             * 2这皆空 默认查询所有
             */
            console.log(this.userName,this.dateRange)
        },
        searchByUserName() {

        }
    }
}
</script>