<template>
  <div>
    <el-tabs tab-position="top" style="height: 600px;">
      <el-tab-pane label="课程资料"><course-materials></course-materials></el-tab-pane>
      <el-tab-pane label="题库"><question-bank></question-bank></el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
    import CourseMaterials from "@/pages/PersonalCenter/Courses/ManagementCourses/coursesData/CourseMaterials";
    import QuestionBank from "@/pages/PersonalCenter/Courses/ManagementCourses/coursesData/QuestionBank";
    export default {
        name: "index",
        components:{
            CourseMaterials,
            QuestionBank
        },
        data() {
            return {

            };
        }
    }
</script>

<style scoped>

</style>