<template>
  <div>
      <el-row>
        <el-col :span="24">
          <el-col :span="3"><el-button type="primary" round>新建考试</el-button></el-col>
          <el-col :span="3"><el-button type="primary" round>监考</el-button></el-col>
          <el-col :span="4" :offset="10"><el-input v-model="searchKeyword"  prefix-icon="el-icon-search" placeholder="试卷" /></el-col>
        </el-col>

      </el-row>
    <el-empty description="暂无考试"></el-empty>
  </div>
</template>

<script>
    export default {
        name: "index",
        data(){
            return{
                searchKeyword:''
            }
        }
    }
</script>

<style scoped>

</style>