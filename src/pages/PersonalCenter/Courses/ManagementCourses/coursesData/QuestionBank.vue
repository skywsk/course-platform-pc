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


  </div>
</template>

<script>
    export default {
        name: "QuestionBank",
        data() {
              return{
                  searchKeyWord:'',

              }
        },
        methods: {
        },
    }


</script>

<style scoped>

</style>