<template>
  <div>
    <el-tabs v-model="activeName" @tab-click="handleClick" tab-position="left">
      <el-tab-pane label="班级管理" name="first">班级管理</el-tab-pane>
      <el-tab-pane label="教师团队管理" name="second">教师团队管理</el-tab-pane>
      <el-tab-pane label="成绩权重" name="third"> 成绩权重</el-tab-pane>
      <el-tab-pane label="课程管理" name="fourth"> 课程管理</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
    export default {
        name: "index",
        data() {
            return {
                activeName: 'second'
            };
        },
        methods: {
            handleClick(tab, event) {
                console.log(tab, event);
            }
        }
    }
</script>

<style scoped>

</style>