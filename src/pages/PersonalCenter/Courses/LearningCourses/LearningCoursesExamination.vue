<template>
  <learn-courses>
    <el-col>
      <el-col :span="24" class="title"><h1>考试</h1></el-col>
      <el-col> <el-empty description="暂无考试"></el-empty></el-col>
    </el-col>
  </learn-courses>
</template>

<script>
  import LearnCourses from "@/components/LearnCourses";
    export default {
        name: "LearingingCoursesExamination",
        components:{
            LearnCourses
        }
    }
</script>

<style scoped>
  .title{
    margin-top: 20px;
    margin-bottom: 20px;
    text-align: center;
    border-bottom: 1px solid #eeee;
    height: 40px;
  }
</style>