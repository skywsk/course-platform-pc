<template>
  <LearnCourses>
    <el-button type="primary" plain icon="el-icon-edit" style="float: right">添加话题</el-button>
    <el-empty description="暂无话题，请添加"></el-empty>
  </LearnCourses>
</template>

<script>
  import LearnCourses from "@/components/LearnCourses";


    export default {
        name: "LearningCourseDiscuss",
        components: {LearnCourses},
    }
</script>

<style scoped>

</style>