<template>
    <div class="comm-wrap">
        <div class="condition">
            <el-date-picker v-model="dateRange"
                            type="daterange"
                            align="right"
                            placeholder="选择日期范围"
                            :picker-options="pickerOptions">
            </el-date-picker>
            <div class="user-name">
                <el-input v-model="userName"
                          placeholder="请输入用户姓名"></el-input>
            </div>
            <el-button type="primary"
                       @click="search()"><i class="el-icon-search "></i> 查询</el-button>
            <el-button type="primary"
                       class="right">下载表格</el-button>
        </div>
        <el-table :data="tableData"
                  highlight-current-row
                  border
                  stripe
                  style="width: 100%">
            <el-table-column type="index"
                             width="60">
            </el-table-column>
    
            <el-table-column prop="name"
                             label="姓名"
                             width="180">
            </el-table-column>
            <el-table-column prop="createTime"
                             label="注册日期"
                             sortable
                             width="180"
                             :formatter="formatDate">
            </el-table-column>
            <el-table-column prop="totalDays"
                             sortable
                             width="150"
                             label="累计打卡天数">
            </el-table-column>
            <el-table-column prop="mornintegral"
                             sortable
                             label="早积分">
            </el-table-column>
            <el-table-column prop="nightintegral"
                             sortable
                             label="晚积分">
            </el-table-column>
    
            <!--<el-table-column label="勋章数">
                            <el-table-column prop="silver"
                                             label="银">
                            </el-table-column>
                            <el-table-column prop="gold'"
                                             label="金">
                            </el-table-column>
                        </el-table-column>-->
            <el-table-column label="勋章数"
                             prop="medal">
            </el-table-column>
            <el-table-column fixed="right"
                             label="操作"
                             width="90">
                <template scope="scope">
                    <el-button @click="viewDetail(scope.row.id)"
                               type="text"
                               size="small">查看详情</el-button>
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
    id: "1",
    createTime: '2016-05-03',
    name: '王小虎0',
    totalDays: "666",
    mornintegral: 0,
    nightintegral: 0,
    medal: 0
}, {
    id: "2",
    createTime: '2016-05-02',
    name: '王小虎00',
    totalDays: "666",
    mornintegral: 0,
    nightintegral: 0,
    medal: 0
}, {
    id: "3",
    createTime: '2016-05-04',
    name: '王小虎1',
    totalDays: "666",
    mornintegral: 0,
    nightintegral: 0,
    medal: 0
}, {
    id: "4",
    createTime: '2016-05-01',
    name: '王小虎',
    totalDays: "666",
    mornintegral: 0,
    nightintegral: 0,
    medal: 0
}, {
    id: "5",
    createTime: '2016-05-08',
    name: '王小虎2',
    totalDays: "666",
    mornintegral: 0,
    nightintegral: 0,
    medal: 0
}, {
    id: "6",
    createTime: '2016-05-06',
    name: '王小虎3',
    totalDays: "666",
    mornintegral: 0,
    nightintegral: 0,
    medal: 0
}, {
    id: "7",
    createTime: '2016-05-07',
    name: '王小虎4',
    totalDays: "666",
    mornintegral: 0,
    nightintegral: 0,
    medal: 0
}, {
    id: "8",
    createTime: '2016-05-08',
    name: '王小虎5',
    totalDays: "666",
    mornintegral: 0,
    nightintegral: 0,
    medal: 0
}, {
    id: "9",
    createTime: '2016-05-06',
    name: '王小虎6',
    totalDays: "666",
    mornintegral: 0,
    nightintegral: 0,
    medal: 0
}, {
    id: "10",
    createTime: '2016-05-07',
    name: '王小虎7',
    totalDays: "666",
    mornintegral: 0,
    nightintegral: 0,
    medal: 0
}];
export default {
    data() {
        return {
            userName: "", //用户名
            dateRange: '', //日期范围
            pickerOptions: {
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
    mountd() {
        this.search();//默认全部查询
    },
    methods: {
        formatDate(row, column) {
            // console.log(row, column)
            return moment(row.date).format("YYYY-MM-DD");
        },
        handleSizeChange(val) {
            console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {
            this.currentPage = val;
            console.log(`当前页: ${val}`);
        },
        viewDetail(id) {
            this.$router.push({
                path: "/manage/datamanage/export/tbUser/personal",
                query: {
                    "id": id
                }
            });
        },
        search() {
            /**根据用户姓名模糊查询
             * 如姓名为空userName ，则根据dateRange
             * 2这皆空 默认查询所有
             */
            console.log(this.userName, this.dateRange)
        },
        searchByUserName() {

        }
    }
}
</script>