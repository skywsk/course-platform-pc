<template>
  <learn-courses>
    <el-col>
      <el-col :span="24" class="title"><h1>讨论</h1></el-col>
      <el-col>
        <el-col :span="4" offset="20">
          <el-button type="primary" plain icon="el-icon-edit">添加讨论</el-button>
        </el-col>
      </el-col>
      <el-col>
        <el-empty description="暂无讨论，请添加"></el-empty>
      </el-col>
    </el-col>
  </learn-courses>
</template>

<script>
    import LearnCourses from "@/components/LearnCourses";

    export default {
        name: "LearingingCoursesNotice",
        components: {
            LearnCourses,
        }
    }
</script>

<style scoped>
  .title {
    margin-top: 20px;
    margin-bottom: 20px;
    text-align: center;
    border-bottom: 1px solid #eeee;
    height: 40px;
  }
</style>