<template>
  <div>
      <el-row style="margin-top: 20px">
        <el-col :span="24">
          <el-col :span="7">
            <el-button type="primary" round icon="el-icon-circle-plus-outline"> 创建题目</el-button>
            <el-button round icon="el-icon-upload2">批量导入</el-button>
            <el-button round >新建文件夹</el-button>
          </el-col>
          <el-col :span="9" :offset="8">
            <el-col :span="12">
              <el-input v-model="searchKeyWord"  prefix-icon="el-icon-search" placeholder="请输入内容">
              </el-input>
            </el-col>
            <el-button round icon="el-icon-setting"> 题型管理</el-button>
            <el-button  round icon="el-icon-download"> 导出</el-button>
          </el-col>
        </el-col >
        <el-col :span="24" style="background-color: #eeeeee;margin-top: 30px">
          <el-col :span="3">文件夹/题目</el-col>
          <el-col :span="2" :offset="10">题型</el-col>
          <el-col :span="2">使用次数</el-col>
          <el-col :span="2">正确率</el-col>
          <el-col :span="2">创建人</el-col>
          <el-col :span="2">创建时间</el-col>
        </el-col>
      </el-row>
    <el-table
      :data="tableData"
      style="width: 100%;margin-bottom: 20px;"
      row-key="id"
      default-expand-all
      :tree-props="{children: 'children', hasChildren: 'hasChildren'}">
      <el-table-column
        type="selection"
        width="55">
      </el-table-column>
      <el-table-column
        prop="date"
          label="日期"
        sortable
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        sortable
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
    </el-table>

  </div>
</template>

<script>
    export default {
        name: "QuestionBank",
        data() {
              return{
                  searchKeyWord:'',
                  tableData: [
                      {
                      id: 1,
                      date: '2016-05-02',
                      name: '王小虎',
                      address: '上海市普陀区金沙江路 1518 弄'
                  },
                      {
                      id: 2,
                      date: '2016-05-04',
                      name: '王小虎',
                      address: '上海市普陀区金沙江路 1517 弄'
                  },
                      {
                      id: 3,
                      date: '2016-05-01',
                      name: '王小虎',
                      address: '上海市普陀区金沙江路 1519 弄',
                      children: [{
                          id: 31,
                          date: '2016-05-01',
                          name: '王小虎',
                          address: '上海市普陀区金沙江路 1519 弄'
                      }, {
                          id: 32,
                          date: '2016-05-01',
                          name: '王小虎',
                          address: '上海市普陀区金沙江路 1519 弄'
                      }]
                  },
                      {
                      id: 4,
                      date: '2016-05-03',
                      name: '王小虎',
                      address: '上海市普陀区金沙江路 1516 弄'
                  }],
              }
        },
        methods: {
            load(tree, treeNode, resolve) {
                setTimeout(() => {
                    resolve([
                        {
                            id: 31,
                            date: '111',
                            name: '王小虎23',
                            address: '上海市普陀区金沙江路 1519 弄'
                        }, {
                            id: 32,
                            date: '2016-05-01',
                            name: '王小虎',
                            address: '上海市普陀区金沙江路 1519 弄'
                        }
                    ])
                }, 1000)
            }
        },
    }


</script>

<style scoped>

</style>